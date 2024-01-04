import React, { useRef, useState } from "react";
import UIModal from "../UI/UIModal";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";
import { UILoader } from "../UI/UILoader";
import { type Lesson } from "@prisma/client";
import { AELesson } from "./AELesson";
import { uploadFile } from "~/utils/functions";

interface PropsI {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  sectionId?: string;
  selectedLesson?: Lesson;
}

export const AELessonContainer = ({
  showModal,
  setShowModal,
  sectionId,
  selectedLesson,
}: PropsI) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  // use the `useMutation` hook to create a mutation
  const ctx = api.useUtils();
  const { mutate, isLoading } = api.lesson.create.useMutation({
    onSuccess: () => {
      ctx.course.readInfinite.invalidate().catch((err) => {
        console.error(err);
      });
    },
    onError: (err) => {
      const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
      toast.error(
        errorMessage ?? "Something went wrong. Please try again later.",
      );
    },
  });
  const { mutate: update, isLoading: isUpdating } =
    api.lesson.update.useMutation({
      onSuccess: () => {
        ctx.course.readInfinite.invalidate().catch((err) => {
          console.error(err);
        });
      },
      onError: (err) => {
        const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
        toast.error(
          errorMessage ?? "Something went wrong. Please try again later.",
        );
      },
    });

  const handleAESectionSave = async () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      // validations
      if (!session) {
        toast.error("No se ha iniciado sesion");
        return;
      }
      if (!formData.get("title")) {
        toast.error("El titulo es requerido");
        return;
      }

      // If we not update the image on edit
      if (selectedLesson && !file) {
        update({
          id: selectedLesson.id,
          title: formData.get("title") as string,
        });
        setShowModal(false);
        return;
      }

      if (!file) {
        toast.error("El video es requerido");
        return;
      }
      setLoading(true);
      const videoUrl = await uploadFile(file);
      setLoading(false);

      // Update lesson
      if (selectedLesson) {
        update({
          title: formData.get("title") as string,
          id: selectedLesson.id,
          videoUrl,
        });
        setFile(null);
        setShowModal(false);
        return;
      }

      if (!sectionId) {
        toast.error("La seccion es requerida");
        return;
      }

      // Create new lesson
      mutate({
        title: formData.get("title") as string,
        videoUrl,
        sectionId,
      });
      setFile(null);
      setShowModal(false);
      return;
    }
  };

  if (isLoading || isUpdating || loading) return <UILoader />;
  return (
    <UIModal
      title={selectedLesson ? "Editar leccion" : "Agregar leccion"}
      setShowModal={setShowModal}
      showModal={showModal}
      onSave={handleAESectionSave}
    >
      <AELesson
        formRef={formRef}
        defaultTitle={selectedLesson?.title}
        defaultVideo={selectedLesson?.videoUrl}
        file={file}
        setFile={setFile}
      />
    </UIModal>
  );
};
