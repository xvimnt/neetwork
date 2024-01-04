import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { PlusIcon } from "~/components/UI/Icons";
import { useState } from "react";
import { AECourseContainer } from "~/components/template/AECourseContainer";
import { AECourseSectionContainer } from "~/components/template/AECourseSectionContainer";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { type Course } from "@prisma/client";
import { SectionCourseContainer } from "~/components/template/SectionCourseContainer";

export default function Course() {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();

  // Course CRUD
  const handleAddCourse = () => {
    setSelectedCourse(undefined);
    setShowAddCourseModal(true);
  };

  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowAddCourseModal(true);
  };

  // Section CRUD
  const handleAddSection = (course: Course) => {
    setSelectedCourse(course);
    setShowAddSectionModal(true);
  };

  return (
    <LayoutSigned>
      <AECourseContainer
        setShowAddCourseModal={setShowAddCourseModal}
        showAddCourseModal={showAddCourseModal}
        selectedCourse={selectedCourse}
      />
      {selectedCourse && (
        <AECourseSectionContainer
          courseId={selectedCourse.id}
          setShowAddSectionModal={setShowAddSectionModal}
          showAddSectionModal={showAddSectionModal}
        />
      )}
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
              onClick={handleAddCourse}
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
          />
        </div>
      </div>
    </LayoutSigned>
  );
}
