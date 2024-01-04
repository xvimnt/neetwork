import React, { useRef } from "react";
import UIModal from "../UI/UIModal";
import { AddCourseSection } from "./AddCourseSection";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";
import { UILoadingPage } from "../UI/UILoader";

interface PropsI {
  showAddSectionModal: boolean;
  setShowAddSectionModal: (show: boolean) => void;
  courseId: string;
}

export const AECourseSectionContainer = ({
  showAddSectionModal,
  setShowAddSectionModal,
  courseId,
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

  const handleAddCourseSectionSave = () => {
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
      mutate({
        title: formData.get("title") as string,
        courseId,
      });
      setShowAddSectionModal(false);
    }
  };

  if (isLoading) return <UILoadingPage />;
  return (
    <UIModal
      title="Agregar Seccion"
      setShowModal={setShowAddSectionModal}
      showModal={showAddSectionModal}
      onSave={handleAddCourseSectionSave}
    >
      <AddCourseSection formRef={formRef} />
    </UIModal>
  );
};
