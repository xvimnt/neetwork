import React from "react";
import { SectionCourse } from "./SectionCourse";
import { UILoadingPage } from "../UI/UILoader";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { type Course } from "@prisma/client";
import { confirmAlert } from "react-confirm-alert";
import { ConfirmDialog } from "./ConfirmDialog";

interface PropsI {
  handleEditCourse: (course: Course) => void;
  handleAddSection: (course: Course) => void;
}

export const SectionCourseContainer = ({
  handleEditCourse,
  handleAddSection,
}: PropsI) => {
  const session = useSession();

  const handleDeleteCourse = (course: Course) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Estas seguro?"
            onClose={onClose}
            onConfirm={() => {}}
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
  if (isLoading) return <UILoadingPage />;

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
              handleEdit: () => handleEditCourse(course),
              handleDelete: () => handleDeleteCourse(course),
              handleAdd: () => handleAddSection(course),
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              items: section.lessons.map((lesson) => ({
                title: lesson.title,
                handleEdit: () => {},
                handleDelete: () => {},
              })),
            }))}
            title={`${index + 1}. ${course.title}`}
          />
        ))}
      </>
    ))
  );
};
