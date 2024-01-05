import {
  type GetServerSidePropsContext,
  type InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import Logo from "~/assets/img/logo.png";
import { ExplorerInsideContainer } from "~/components/template/ExplorerInsideContainer";
import { UILoadingPage } from "~/components/UI/UILoader";
import { UIPage404 } from "~/components/UI/UIPage404";
import { api } from "~/utils/api";
import { useState } from "react";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ courseId }: PageProps) {
  const [currentVideo, setCurrentVideo] = useState("");

  const videos = [
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
    {
      title: "Bienvenida al curso",
      time: "3min 20s",
    },
  ];
  const sections = [
    "Introduccion",
    "Fundamentos",
    "Instalacion",
    "Configuracion",
  ];

  const { data, isLoading } = api.course.read.useQuery({
    id: courseId,
  });

  if (isLoading) return <UILoadingPage />;
  if (!data) return <UIPage404 />;

  return (
    <LayoutSigned noPadding>
      <div className="flex flex-row md:ml-[48px]">
        <div className="relative flex w-full flex-col gap-2">
          {/* video title */}
          <div className="absolute left-0 top-0 z-10 h-[90px] w-full shrink-0 bg-gradient-to-b from-black via-black py-4 pl-[40px]">
            <h1 className="text-base font-bold not-italic leading-[normal] text-white">
              {data.title}
            </h1>
            <h3 className="text-[11px] font-bold not-italic leading-[normal] text-[color:var(--primary-gray-light,#9F9F9F)]">
              Fundamentos
            </h3>
          </div>
          {/* video body */}
          <div className="relative h-[45vw] w-full shrink-0">
            <video autoPlay loop controls className="h-full w-full">
              <source src={data.sections[0]?.lessons[1]?.videoUrl} />
            </video>
          </div>
          {/* info */}
          <div className="mb-[60px] ml-[40px] flex flex-col gap-4">
            {/* user */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="relative h-10 w-10 shrink-0 rounded-[40px]">
                  <Image
                    src={data.user.image ? data.user.image : "../img/user.png"}
                    fill
                    objectFit="cover"
                    alt="user"
                    className="rounded-[40px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-left text-[17px] font-bold not-italic leading-[normal] text-[#383838]">
                    {data.user.name}
                  </p>
                  <p className="text-left text-sm font-bold not-italic leading-[normal] text-[#666]">
                    {data.user.profession}
                  </p>
                </div>
              </div>
            </div>
            {/* course description */}
            <div className="flex flex-col gap-2">
              <article className="w-full text-left text-[17px] font-light not-italic leading-[normal] text-[#383838]">
                {data.description}
              </article>
            </div>
          </div>
        </div>
        <div className="flex h-[70vh] w-[336px] shrink-0 flex-col ">
          {/* header */}
          <div className="flex h-[76px] w-[336px] shrink-0 flex-row items-center gap-4 bg-[#c7e21c] p-4">
            <div className="relative h-[31px] w-[31px]">
              <Image src={Logo} alt="logo" fill objectFit="cover" />
            </div>
            <h1 className="text-right text-[23px] font-bold not-italic leading-[normal] text-black">
              Contenido
            </h1>
          </div>
          {/* explorer */}
          <div className="flex h-full w-[336px] shrink-0 flex-col gap-6 overflow-y-scroll border border-solid border-[#BABABA] p-4">
            {data.sections.map((section) => (
              <ExplorerInsideContainer
                key={section.id}
                title={section.title}
                videos={section.lessons.map((lesson) => ({
                  title: lesson.title,
                  time:
                    new Date(lesson.duration * 1000)
                      .toISOString()
                      .substr(11, 5) + " min",
                  id: lesson.id,
                }))}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutSigned>
  );
}

// Fetch data before the page loads
export const getStaticProps = (ctx: GetServerSidePropsContext) => {
  const helpers = generateSSGHelper();

  const slug = ctx.params?.slug as string;

  if (!slug) throw new Error("No slug provided");

  //   helpers.lot.getLotById.prefetch({ id: lotId }).catch((err) => {
  //     console.error(err);
  //   });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
      courseId: slug,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
