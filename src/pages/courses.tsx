import { useState } from "react";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { CourseCardLarge } from "~/components/template/CourseCardLarge";
import { SavedCoursesTabs } from "~/components/template/SavedCoursesTabs";

const course = {
  id: "1",
  title: "Curso de React.js",
  authorName: "Ericka Godinez",
  remainingTime: "5 horas 3 minutos",
  date: "2 semanas",
  imageUrl:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fHww",
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "En Progreso",
      active: activeTab === 0,
      handleClick: () => setActiveTab(0),
    },
    {
      name: "Guardados",
      active: activeTab === 1,
      handleClick: () => setActiveTab(1),
    },
    {
      name: "Completados",
      active: activeTab === 2,
      handleClick: () => setActiveTab(2),
    },
  ];

  return (
    <LayoutSigned>
      <div className="flex flex-col gap-8 py-10">
        <SavedCoursesTabs tabs={tabs} />
        <CourseCardLarge {...course} />
        <CourseCardLarge {...course} />
        <CourseCardLarge {...course} />
      </div>
    </LayoutSigned>
  );
}
