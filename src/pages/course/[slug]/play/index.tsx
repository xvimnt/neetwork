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
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { e } from "@vercel/blob/dist/put-96a1f07e";
import toast from "react-hot-toast";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ courseId }: PageProps) {
  const [currentVideo, setCurrentVideo] = useState("");

  const session = useSession();
  const ctx = api.useUtils();
  const { mutate: complete, isLoading: isCompleting } =
    api.assignation.completeLesson.useMutation({
      onSuccess: () => {
        ctx.assignation.read.invalidate().catch((err) => {
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
  const { mutate: update, isLoading: isUpdating } =
    api.assignation.update.useMutation({
      onSuccess: () => {
        // ctx.course.readInfinite.invalidate().catch((err) => {
        //   console.error(err);
        // });
      },
      onError: (err) => {
        const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
        toast.error(
          errorMessage ?? "Something went wrong. Please try again later.",
        );
      },
    });

  const { data: assignation, isLoading: assignationLoading } =
    api.assignation.read.useQuery({
      courseId: courseId,
      userId: session.data?.user.id ? session.data?.user.id : "",
    });

  const { data, isLoading } = api.course.read.useQuery({
    id: courseId,
  });

  useEffect(() => {
    if (assignation && data) {
      const currentLessonId = assignation.currentLessonId;
      if (currentLessonId) {
        setCurrentVideo(
          data.sections[0]?.lessons.find(
            (lesson) => lesson.id === currentLessonId,
          )?.videoUrl ?? "",
        );
      } else {
        setCurrentVideo(data.sections[0]?.lessons[0]?.videoUrl ?? "");
      }
    }
  }, [assignation, data]);

  const handleClickLesson = (id: string) => {
    const video = data?.sections
      .map((section) => section.lessons)
      .flat()
      .find((lesson) => lesson.id === id)?.videoUrl;
    if (video) setCurrentVideo(video);
    update({
      id: assignation?.id ?? "",
      currentLessonId: id,
    });
  };

  const handleFinish = () => {
    const currentLessonId = assignation?.currentLessonId;
    if (!currentLessonId) {
      toast.error("No hay leccion actual");
      return;
    }

    const lessons = data?.sections.map((section) => section.lessons).flat();
    if (!lessons) {
      toast.error("No hay lecciones");
      return;
    }

    const currentLessonIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLessonId,
    );
    if (currentLessonIndex === undefined) {
      toast.error("No se encuentra la leccion actual");
      return;
    }

    if (currentLessonIndex === lessons.length - 1) {
      toast.success("Termino todas las lecciones");
      complete({
        id: assignation?.id ?? "",
        lessonId: currentLessonId,
      });
      return;
    }

    const nextLesson = lessons[currentLessonIndex + 1];
    if (!nextLesson) {
      toast.error("No hay siguiente leccion");
      return;
    }

    // complete current lesson and go next lesson
    complete({
      id: assignation?.id ?? "",
      lessonId: currentLessonId,
    });
    handleClickLesson(nextLesson.id);
  };

  const isCompletedThisLesson = (id: string) => {
    return (
      assignation?.completedLessons.findIndex(
        (completedLesson) => completedLesson.lessonId === id,
      ) !== -1
    );
  };

  if (isLoading || assignationLoading || isUpdating || isCompleting)
    return <UILoadingPage />;
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
            {currentVideo ? (
              <video
                autoPlay
                onContextMenu={(e) => e.preventDefault()}
                playsInline
                controls
                controlsList="nodownload"
                onEnded={handleFinish}
                className="h-full w-full"
                key={currentVideo}
              >
                <source src={currentVideo} />
              </video>
            ) : (
              <p>No video</p>
            )}
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
                handleClickLesson={handleClickLesson}
                lessons={section.lessons.map((lesson) => ({
                  title: lesson.title,
                  time:
                    new Date(lesson.duration * 1000)
                      .toISOString()
                      .substr(11, 5) + " min",
                  id: lesson.id,
                  isCompleted: isCompletedThisLesson(lesson.id),
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
