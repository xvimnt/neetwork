import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { PlusIcon } from "~/components/UI/Icons";
import { useState } from "react";
import { AECourseContainer } from "~/components/template/AECourseContainer";
import { AESectionContainer } from "~/components/template/AESectionContainer";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { SectionCourseContainer } from "~/components/template/SectionCourseContainer";
import { type Lesson, type Course, type Section } from "@prisma/client";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { AELessonContainer } from "~/components/template/AELessonContainer";

export default function Course() {
  const [showAECourseModal, setShowAECourseModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [selectedSection, setSelectedSection] = useState<Section>();
  const [selectedLesson, setSelectedLesson] = useState<Lesson>();

  // Course CRUD
  const handleAECourse = () => {
    setSelectedCourse(undefined);
    setShowAECourseModal(true);
  };

  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowAECourseModal(true);
  };

  // Section CRUD
  const handleAddSection = (course: Course) => {
    setSelectedCourse(course);
    setSelectedSection(undefined);
    setShowAddSectionModal(true);
  };

  const handleEditSection = (section: Section) => {
    setSelectedSection(section);
    setShowAddSectionModal(true);
  };

  // Lesson CRUD
  const handleAddLesson = (section: Section) => {
    setSelectedSection(section);
    setSelectedLesson(undefined);
    setShowAddLessonModal(true);
  };

  const handleEditLesson = (lesson: Lesson) => {
    setSelectedSection(undefined);
    setSelectedLesson(lesson);
    setShowAddLessonModal(true);
  };

  return (
    <LayoutSigned>
      <AECourseContainer
        setShowModal={setShowAECourseModal}
        showModal={showAECourseModal}
        selectedCourse={selectedCourse}
      />
      <AESectionContainer
        courseId={selectedCourse?.id}
        selectedSection={selectedSection}
        setShowModal={setShowAddSectionModal}
        showModal={showAddSectionModal}
      />
      <AELessonContainer
        sectionId={selectedSection?.id}
        selectedLesson={selectedLesson}
        showModal={showAddLessonModal}
        setShowModal={setShowAddLessonModal}
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
              onClick={handleAECourse}
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
          <SectionCourseContainer
            handleEditCourse={handleEditCourse}
            handleAddSection={handleAddSection}
            handleEditSection={handleEditSection}
            handleAddLesson={handleAddLesson}
            handleEditLesson={handleEditLesson}
          />
        </div>
      </div>
    </LayoutSigned>
  );
}

// Fetch data before the page loads
export const getStaticProps = () => {
  const helpers = generateSSGHelper();

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
    },
  };
};
