import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { PlusIcon } from "~/components/UI/Icons";
import { SectionCourse } from "~/components/template/SectionCourse";
import { useState } from "react";
import { AddCourseContainer } from "~/components/template/AddCourseContainer";
import { AddCourseSectionContainer } from "~/components/template/AddCourseSectionContainer";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { UILoadingPage } from "~/components/UI/UILoader";

export default function Course() {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const session = useSession();

  const exampleSubItems = [
    {
      title: "Bienvenida al curso",
      handleEdit: () => {},
      handleDelete: () => {},
    },
    {
      title: "Porque usar WooCommerce",
      handleEdit: () => {},
      handleDelete: () => {},
    },
    {
      title: "Como funciona WooCommerce",
      handleEdit: () => {},
      handleDelete: () => {},
    },
  ];
  const exampleItems = [
    {
      title: "Introduccion",
      handleEdit: () => {},
      handleDelete: () => {},
      handleAdd: () => {},
      items: exampleSubItems,
    },
    {
      title: "Fundamentos",
      handleEdit: () => {},
      handleDelete: () => {},
      handleAdd: () => {},
      items: exampleSubItems,
    },
    {
      title: "Uso de WooCommerce",
      handleEdit: () => {},
      handleDelete: () => {},
      handleAdd: () => {},
      items: exampleSubItems,
    },
    {
      title: "Configuracion",
      handleEdit: () => {},
      handleDelete: () => {},
      handleAdd: () => {},
      items: exampleSubItems,
    },
  ];
  const courses = [
    {
      title: "Curso de WooCommerce",
      items: exampleItems,
    },
    {
      title: "Curso de React",
      items: exampleItems,
    },
  ];

  const handleDeleteCourse = () => {};
  const handleAddCourseSection = (courseId: string) => {
    setSelectedCourseId(courseId);
    setShowAddSectionModal(true);
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

  if (isLoading) return <UILoadingPage />;
  return (
    <LayoutSigned>
      <AddCourseContainer
        setShowAddCourseModal={setShowAddCourseModal}
        showAddCourseModal={showAddCourseModal}
      />
      <AddCourseSectionContainer
        courseId={selectedCourseId}
        setShowAddSectionModal={setShowAddSectionModal}
        showAddSectionModal={showAddSectionModal}
      />
      <div className="flex flex-col gap-8">
        {/* user cards */}
        <div className="flex flex-row">
          {/* user brief */}
          <div className="flex h-[269px] w-1/2 flex-col items-center justify-center gap-4 border border-[#BDBDBD]">
            <div className="flex flex-row items-center gap-4">
              <div className="relative h-[45px] w-[45px] rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="user"
                  fill
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[20px] font-bold not-italic leading-[normal] text-black">
                  Juan Godinez
                </h2>
                <p className="text-[16px] font-bold not-italic leading-[normal] text-gray-500">
                  Instructor
                </p>
              </div>
            </div>
            {/* add course */}
            <button
              onClick={() => setShowAddCourseModal(true)}
              className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border border-[#c7e21c] bg-[#c7e21c] px-8 py-2.5 hover:bg-[#eeff7e] "
            >
              <span className="font-semibold not-italic leading-[normal] text-black">
                Agregar Curso
              </span>
              <PlusIcon className="h-[24px] w-[24px] fill-[#000000]" />
            </button>
          </div>
          {/* user edit info */}
          <div className="flex w-1/2 flex-col items-center justify-center gap-4 border border-[#BDBDBD]">
            <span className="text-xl font-semibold not-italic leading-[normal] text-black">
              Profesion:
            </span>
            <input className="border-blpeer-aria-checked: h-[45px] w-[272px] rounded-md border p-2" />
            <button className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border border-[#c7e21c] bg-[#c7e21c] px-[35px] py-2.5 hover:bg-[#eeff7e]">
              <span className="font-semibold not-italic leading-[normal] text-black">
                Guardar
              </span>
            </button>
          </div>
        </div>
        {/* courses */}
        <div className="flex flex-col gap-8 py-4">
          <h2 className="text-[30px] font-bold not-italic leading-[normal] text-black">
            Tus cursos
          </h2>
          {!data || data.pages.length === 0 ? (
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
                    handleAdd={() => handleAddCourseSection(course.id)}
                    handleDelete={handleDeleteCourse}
                    key={course.title}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    items={course.sections.map((section) => ({
                      title: section.title,
                      handleEdit: () => {},
                      handleDelete: () => {},
                      handleAdd: () => {},
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
          )}
        </div>
      </div>
    </LayoutSigned>
  );
}
