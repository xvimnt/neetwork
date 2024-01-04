import React, { useRef } from "react";
import UIModal from "../UI/UIModal";
import { AESection } from "./AESection";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";
import { UILoadingPage } from "../UI/UILoader";
import { type Section } from "@prisma/client";

interface PropsI {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  courseId?: string;
  selectedSection?: Section;
}

export const AESectionContainer = ({
  showModal,
  setShowModal,
  courseId,
  selectedSection,
}: PropsI) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  // use the `useMutation` hook to create a mutation
  const ctx = api.useUtils();
  const { mutate, isLoading } = api.section.create.useMutation({
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
    api.section.update.useMutation({
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

  const handleAESectionSave = () => {
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

      // Update section
      if (selectedSection) {
        update({
          title: formData.get("title") as string,
          id: selectedSection.id,
        });
        setShowModal(false);
        return;
      }

      // Create new section
      if (courseId) {
        mutate({
          title: formData.get("title") as string,
          courseId,
        });
        setShowModal(false);
        return;
      }

      toast.error("El curso es requerido");
    }
  };

  if (isLoading || isUpdating) return <UILoadingPage />;
  return (
    <UIModal
      title={selectedSection ? "Editar seccion" : "Agregar seccion"}
      setShowModal={setShowModal}
      showModal={showModal}
      onSave={handleAESectionSave}
    >
      <AESection formRef={formRef} defaultTitle={selectedSection?.title} />
    </UIModal>
  );
};
