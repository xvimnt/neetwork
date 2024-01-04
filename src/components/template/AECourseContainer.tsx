import React, { useRef, useState } from "react";
import { AddCourse } from "./AddCourse";
import UIModal from "../UI/UIModal";
import { api } from "~/utils/api";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { uploadFile } from "~/utils/functions";
import { UILoadingPage } from "../UI/UILoader";
import { type Course } from "@prisma/client";

interface PropsI {
  showAddCourseModal: boolean;
  setShowAddCourseModal: (show: boolean) => void;
  selectedCourse?: Course;
}

export const AECourseContainer = ({
  showAddCourseModal,
  setShowAddCourseModal,
  selectedCourse,
}: PropsI) => {
  const [file, setFile] = useState<File | null>(null);
  const addCourseFormRef = useRef<HTMLFormElement>(null);
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

      // If we not update the image on edit
      if (selectedCourse && !file) {
        update({
          id: selectedCourse.id,
          title: formData.get("title") as string,
          description: formData.get("description") as string,
          skills: formData.get("skills") as string,
        });
        setShowAddCourseModal(false);
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
        setShowAddCourseModal(false);
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
      setShowAddCourseModal(false);
    }
  };

  if (isCreating || isUpdating) return <UILoadingPage />;

  return (
    <UIModal
      title={selectedCourse ? "Editar curso" : "Agregar curso"}
      setShowModal={setShowAddCourseModal}
      showModal={showAddCourseModal}
      onSave={handleAddCourseSave}
    >
      <AddCourse
        addCourseFormRef={addCourseFormRef}
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
