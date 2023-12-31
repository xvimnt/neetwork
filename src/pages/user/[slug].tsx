import {
  type GetServerSidePropsContext,
  type InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import WhiteGradient from "~/assets/svg/white-gradient.svg";
import {
  BannerArrowIcon,
  CircleIcon,
  GraduationIcon,
  PlusIcon,
} from "~/components/UI/Icons";
import { ExplorerOutsideContainer } from "~/components/template/ExplorerOutsideContainer";
import Link from "next/link";
import { SectionCard } from "~/components/template/SectionCard";
import { SectionCards } from "~/components/template/SectionCards";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ userId }: PageProps) {
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
  //   const gray = 'BDBDBD'

  const exampleItems = [
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
  return (
    <LayoutSigned>
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
            <button className="inline-flex items-center justify-center gap-[19px] rounded-[50px] bg-[#c7e21c] px-8 py-2.5">
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
            <input className="h-[45px] w-[272px] rounded-md border border-black" />
            <button className="inline-flex items-center justify-center gap-[19px] rounded-[50px] bg-[#c7e21c] px-[35px] py-2.5">
              <span className="font-semibold not-italic leading-[normal] text-black">
                Guardar
              </span>
            </button>
          </div>
        </div>
        {/* courses */}
        <div className="flex flex-col gap-8 py-4">
          {/* title and button */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <span className="text-[22px] font-bold not-italic leading-[normal] text-black">
                1.Curso de WooComerce
              </span>
              {/* dropdown button */}
              <div className="relative">
                <CircleIcon className="h-[43px] w-11 shrink-0 fill-[#F0FCFF] stroke-[#797979] stroke-[1px]" />
                <BannerArrowIcon className="absolute left-[8px] top-[8px] h-[25px] w-[25px] rotate-[270deg]" />
              </div>
            </div>
            {/* add section */}
            <button className="inline-flex items-center justify-center gap-[19px] rounded-[50px] bg-[#c7e21c] px-8 py-2.5">
              <span className="font-semibold not-italic leading-[normal] text-black">
                Agregar Seccion
              </span>
              <PlusIcon className="h-[24px] w-[24px]  fill-[#000000]" />
            </button>
          </div>
          {/* cards */}
          <SectionCards
            items={[
              {
                title: "Introduccion",
                handleEdit: () => {},
                handleDelete: () => {},
                handleAdd: () => {},
                items: exampleItems,
              },
              {
                title: "Fundamentos",
                handleEdit: () => {},
                handleDelete: () => {},
                handleAdd: () => {},
                items: exampleItems,
              },
            ]}
          />
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

  const userId = parseInt(slug);

  //   helpers.lot.getLotById.prefetch({ id: lotId }).catch((err) => {
  //     console.error(err);
  //   });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
      userId,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
