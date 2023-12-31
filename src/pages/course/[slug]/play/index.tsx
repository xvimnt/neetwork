import {
  type GetServerSidePropsContext,
  type InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import Logo from "~/assets/img/logo.png";
import { ExplorerInsideContainer } from "~/components/template/ExplorerInsideContainer";
import WhiteGradient from "~/assets/svg/white-gradient.svg";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ courseId }: PageProps) {
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
  return (
    <LayoutSigned noPadding>
      <div className="flex flex-row md:ml-[48px]">
        <div className="relative flex w-full flex-col gap-8">
          {/* video title */}
          <div className="absolute left-0 top-0 z-10 h-[90px] w-full shrink-0 bg-gradient-to-b from-black via-black py-4 pl-[40px]">
            <h1 className="text-base font-bold not-italic leading-[normal] text-white">
              Curso de Woocomerce
            </h1>
            <h3 className="text-[11px] font-bold not-italic leading-[normal] text-[color:var(--primary-gray-light,#9F9F9F)]">
              Fundamentos
            </h3>
          </div>
          {/* video body */}
          <div className="relative h-[40vw] w-full shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="curso"
              fill
              objectFit="cover"
            />
          </div>
          {/* info */}
          <div className="mb-[60px] ml-[40px] flex flex-col gap-4">
            {/* user */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="relative h-10 w-10 shrink-0 rounded-[40px]">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    fill
                    objectFit="cover"
                    alt="user"
                    className="rounded-[40px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-left text-[17px] font-bold not-italic leading-[normal] text-[#383838]">
                    Juan Posadas
                  </p>
                  <p className="text-left text-sm font-bold not-italic leading-[normal] text-[#666]">
                    Ingeniero de software
                  </p>
                </div>
              </div>
            </div>
            {/* course description */}
            <div className="flex flex-col gap-2">
              <article className="w-full text-left text-[17px] font-light not-italic leading-[normal] text-[#383838]">
                Lorem ipsum dolor sit amet consectetur. Nunc justo ligula
                eleifend lacus pulvinar amet dictum tempor malesuada. Odio netus
                et ut at et sit libero pretium fames. Pellentesque facilisi
                consequat consequat imperdiet sed et ultricies dolor nulla.
                Feugiat duis aenean est viverra sapien gravida in.
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
          <div className="flex h-full w-[336px] shrink-0 flex-col gap-4 overflow-y-scroll border border-solid border-[#BABABA] p-4">
            {sections.map((section) => (
              <ExplorerInsideContainer
                key={section}
                title={section}
                videos={videos}
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

  const courseId = parseInt(slug);

  //   helpers.lot.getLotById.prefetch({ id: lotId }).catch((err) => {
  //     console.error(err);
  //   });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
      courseId,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
