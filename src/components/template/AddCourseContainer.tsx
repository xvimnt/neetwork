import React, { useRef, useState } from "react";
import { AddCourse } from "./AddCourse";
import UIModal from "../UI/UIModal";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { uploadFile } from "~/utils/functions";
import { UILoadingPage } from "../UI/UILoader";

interface PropsI {
  showAddCourseModal: boolean;
  setShowAddCourseModal: (show: boolean) => void;
}

export const AddCourseContainer = ({
  showAddCourseModal,
  setShowAddCourseModal,
}: PropsI) => {
  const [file, setFile] = useState<File | null>(null);
  const addCourseFormRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  // use the `useMutation` hook to create a mutation
  // const ctx = api.useContext();
  const { mutate, isLoading } = api.course.create.useMutation({
    onSuccess: () => {
      //   ctx.user.getInfinite.invalidate().catch((err) => {
      //     console.error(err);
      //   });
    },
    onError: (err) => {
      const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
      toast.error(
        errorMessage ?? "Something went wrong. Please try again later.",
      );
    },
  });

  const handleAddCourseSave = async () => {
    if (addCourseFormRef.current) {
      const formData = new FormData(addCourseFormRef.current);

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
      if (!file) {
        toast.error("La imagen es requerida");
        return;
      }
      const courseImageUrl = await uploadFile(file);
      mutate({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        skills: formData.get("skills") as string,
        imageUrl: courseImageUrl,
        userId: session.user.id,
      });
      setShowAddCourseModal(false);
    }
  };

  if (isLoading) return <UILoadingPage />;

  return (
    <UIModal
      title="Agregar Curso"
      setShowModal={setShowAddCourseModal}
      showModal={showAddCourseModal}
      onSave={handleAddCourseSave}
    >
      <AddCourse
        addCourseFormRef={addCourseFormRef}
        file={file}
        setFile={setFile}
      />
    </UIModal>
  );
};
