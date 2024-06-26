import React, { useRef, useState } from "react";
import { AECourse } from "./AECourse";
import UIModal from "../UI/UIModal";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { uploadFile } from "~/utils/functions";
import { UILoadingPage } from "../UI/UILoader";
import { type Course } from "@prisma/client";

interface PropsI {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  selectedCourse?: Course;
}

export const AECourseContainer = ({
  showModal,
  setShowModal,
  selectedCourse,
}: PropsI) => {
  const [file, setFile] = useState<File | null>(null);
  const AECourseFormRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  // use the `useMutation` hook to create a mutation
  const ctx = api.useUtils();
  const { mutate, isLoading: isCreating } = api.course.create.useMutation({
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
    api.course.update.useMutation({
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

  const handleAECourseSave = async () => {
    if (AECourseFormRef.current) {
      const formData = new FormData(AECourseFormRef.current);

      // validations
      if (!session) {
        toast.error("No se ha iniciado sesion");
        return;
      }
      if (!formData.get("title")) {
        toast.error("El titulo es requerido");
        return;
      }
      if (!formData.get("description")) {
        toast.error("La descripcion es requerida");
        return;
      }
      if (!formData.get("skills")) {
        toast.error("Las habilidades son requeridas");
        return;
      }

      // If we not update the image on edit
      if (selectedCourse && !file) {
        update({
          id: selectedCourse.id,
          title: formData.get("title") as string,
          description: formData.get("description") as string,
          skills: formData.get("skills") as string,
        });
        setShowModal(false);
        return;
      }

      if (!file) {
        toast.error("La imagen es requerida");
        return;
      }
      const courseImageUrl = await uploadFile(file);

      // Update
      if (selectedCourse) {
        update({
          id: selectedCourse.id,
          title: formData.get("title") as string,
          description: formData.get("description") as string,
          skills: formData.get("skills") as string,
          imageUrl: courseImageUrl,
        });
        setShowModal(false);
        return;
      }

      // Create
      mutate({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        skills: formData.get("skills") as string,
        imageUrl: courseImageUrl,
        userId: session.user.id,
      });
      setShowModal(false);
    }
  };

  if (isCreating || isUpdating) return <UILoadingPage />;

  return (
    <UIModal
      title={selectedCourse ? "Editar curso" : "Agregar curso"}
      setShowModal={setShowModal}
      showModal={showModal}
      onSave={handleAECourseSave}
    >
      <AECourse
        AECourseFormRef={AECourseFormRef}
        file={file}
        setFile={setFile}
        defaultTitle={selectedCourse?.title}
        defaultDescription={selectedCourse?.description}
        defaultSkills={selectedCourse?.skills.join(",")}
        defaultImage={selectedCourse?.imageUrl}
      />
    </UIModal>
  );
};
