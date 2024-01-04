import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { useState } from "react";
import { AECourseContainer } from "~/components/template/AECourseContainer";
import { AESectionContainer } from "~/components/template/AESectionContainer";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { SectionCourseContainer } from "~/components/template/SectionCourseContainer";
import { type Lesson, type Course, type Section } from "@prisma/client";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { AELessonContainer } from "~/components/template/AELessonContainer";
import { UserBrief } from "~/components/template/UserBrief";
import { getServerAuthSession } from "~/server/auth";
import { type GetServerSidePropsContext } from "next";

export default function Course() {
  const [showAECourseModal, setShowAECourseModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [selectedSection, setSelectedSection] = useState<Section>();
  const [selectedLesson, setSelectedLesson] = useState<Lesson>();

  // Course CRUD
  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowAECourseModal(true);
  };

  const handleAddCourse = () => {
    setSelectedCourse(undefined);
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
      {/* Modals */}
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
        {/* user info */}
        <UserBrief />
        {/* courses */}
        <SectionCourseContainer
          handleAddCourse={handleAddCourse}
          handleEditCourse={handleEditCourse}
          handleAddSection={handleAddSection}
          handleEditSection={handleEditSection}
          handleAddLesson={handleAddLesson}
          handleEditLesson={handleEditLesson}
        />
      </div>
    </LayoutSigned>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  const helpers = generateSSGHelper();

  await helpers.course.readInfinite.prefetch({
    userId: session?.user?.id,
  });

  return {
    props: {
      // id: id,
      session: session,
    },
  };
}
