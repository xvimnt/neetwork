import React from "react";
import { SectionCourse } from "./SectionCourse";
import { UILoadingPage } from "../UI/UILoader";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { type Section, type Course, type Lesson } from "@prisma/client";
import { confirmAlert } from "react-confirm-alert";
import { ConfirmDialog } from "./ConfirmDialog";
import toast from "react-hot-toast";

interface PropsI {
  handleEditCourse: (course: Course) => void;
  handleAddSection: (course: Course) => void;
  handleEditSection: (section: Section) => void;
  handleAddLesson: (section: Section) => void;
  handleEditLesson: (lesson: Lesson) => void;
}

export const SectionCourseContainer = ({
  handleEditCourse,
  handleAddSection,
  handleEditSection,
  handleAddLesson,
  handleEditLesson,
}: PropsI) => {
  const session = useSession();

  // use the `useMutation` hook to create a mutation
  const ctx = api.useContext();
  const { mutate: deleteCourse, isLoading: isDeleting } =
    api.course.delete.useMutation({
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
  const { mutate: deleteSection, isLoading: isDeletingSection } =
    api.section.delete.useMutation({
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

  const handleDeleteCourse = (course: Course) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Estas seguro?"
            onClose={onClose}
            onConfirm={() => {
              deleteCourse({
                id: course.id,
              });
            }}
          >
            <p className="text-md font-normal">
              Estas a punto de eliminar el curso de{" "}
              <span className="font-semibold">{course.title}</span>, sus
              secciones y todos sus videos
            </p>
          </ConfirmDialog>
        );
      },
    });
  };

  const handleDeleteSection = (section: Section) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Estas seguro?"
            onClose={onClose}
            onConfirm={() => {
              deleteSection({
                id: section.id,
              });
            }}
          >
            <p className="text-md font-normal">
              Estas a punto de eliminar la seccion{" "}
              <span className="font-semibold">{section.title}</span> y todos sus
              videos
            </p>
          </ConfirmDialog>
        );
      },
    });
  };

  const handleDeleteLesson = (lesson: Lesson) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Estas seguro?"
            onClose={onClose}
            onConfirm={() => {
              deleteSection({
                id: lesson.id,
              });
            }}
          >
            <p className="text-md font-normal">
              Estas a punto de eliminar la leccion{" "}
              <span className="font-semibold">{lesson.title}</span> con el video
              asociado
            </p>
          </ConfirmDialog>
        );
      },
    });
  };

  const { data, fetchNextPage, isLoading } =
    api.course.readInfinite.useInfiniteQuery(
      {
        limit: 5,
        userId: session.data?.user.id,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        // initialCursor: 1, // <-- optional you can pass an initialCursor
      },
    );
  const hasData = data && data.pages.length > 0;
  if (isLoading || isDeleting) return <UILoadingPage />;

  return !hasData ? (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-[20px] font-bold not-italic leading-[normal] text-black">
        No tienes cursos
      </span>
    </div>
  ) : (
    data.pages.map((course) => (
      <>
        {course.courses.map((course, index) => (
          <SectionCourse
            handleAddSection={() => handleAddSection(course)}
            handleDelete={() => handleDeleteCourse(course)}
            handleEdit={() => handleEditCourse(course)}
            key={course.title}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            items={course.sections.map((section) => ({
              title: section.title,
              handleEdit: () => handleEditSection(section),
              handleDelete: () => handleDeleteSection(section),
              handleAdd: () => handleAddLesson(section),
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              items: section.lessons.map((lesson) => ({
                title: lesson.title,
                handleEdit: () => handleEditLesson(lesson),
                handleDelete: () => handleDeleteLesson(lesson),
              })),
            }))}
            title={`${index + 1}. ${course.title}`}
          />
        ))}
      </>
    ))
  );
};
