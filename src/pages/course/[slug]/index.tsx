import {
  type GetServerSidePropsContext,
  type InferGetStaticPropsType,
} from "next";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { ExplorerOutsideContainer } from "~/components/template/ExplorerOutsideContainer";
import { api } from "~/utils/api";
import { UILoadingPage } from "~/components/UI/UILoader";
import { UIPage404 } from "~/components/UI/UIPage404";
import { useSession } from "next-auth/react";
import UIModal from "~/components/UI/UIModal";
import { useRef, useState } from "react";
import { AddAssignation } from "~/components/template/AddAsignation";
import { confirmAlert } from "react-confirm-alert";
import { ConfirmDialog } from "~/components/template/ConfirmDialog";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { CourseBanner } from "~/components/template/CourseBanner";
import { CourseInfo } from "~/components/template/CourseInfo";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ courseId }: PageProps) {
  const [showModal, setShowModal] = useState(false);

  const addAssignationFormRef = useRef<HTMLFormElement>(null);

  // use the `useMutation` hook to create a mutation
  const { mutate, isLoading: isCreating } = api.assignation.create.useMutation({
    onSuccess: async () => {
      await router.push(`${courseId}/play`);
    },
    onError: (err) => {
      const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
      toast.error(
        errorMessage ?? "Something went wrong. Please try again later.",
      );
    },
  });

  const { data, isLoading } = api.course.read.useQuery({
    id: courseId,
  });
  const session = useSession();
  const { data: assignationCount } = api.assignation.count.useQuery({
    courseId: courseId,
  });
  const { data: assignation, isLoading: assignationLoading } =
    api.assignation.read.useQuery({
      courseId: courseId,
      userId: session.data?.user.id ? session.data?.user.id : "",
    });
  const router = useRouter();
  const handleInscription = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Estas seguro?"
            onClose={onClose}
            onConfirm={() => {
              if (session.data?.user.id) {
                mutate({
                  courseId,
                  userId: session.data?.user.id,
                });
              } else {
                toast.error("No estas logueado");
              }
              onClose();
            }}
          >
            <p className="text-md font-normal">
              Estas a punto de inscribirte en este curso
            </p>
          </ConfirmDialog>
        );
      },
    });
  };

  const isCompletedThisLesson = (id: string) => {
    return (
      assignation?.completedLessons.findIndex(
        (completedLesson) => completedLesson.lessonId === id,
      ) !== -1
    );
  };

  if (isLoading || assignationLoading || isCreating) return <UILoadingPage />;
  if (!data) return <UIPage404 />;
  return (
    <LayoutSigned>
      <UIModal
        setShowModal={setShowModal}
        showModal={showModal}
        title="Inscribirse"
      >
        <AddAssignation formRef={addAssignationFormRef} />
      </UIModal>
      <div className="flex w-full flex-col gap-16">
        {/* banner */}
        <CourseBanner
          courseId={courseId}
          title={data.title}
          imageUrl={data.imageUrl}
          createdAt={data.createdAt}
          assignationCount={assignationCount ? assignationCount : 0}
          hasAssignation={assignation ? true : false}
          duration={
            new Date(
              data.sections.reduce((total, section) => {
                return (
                  total +
                  section.lessons.reduce((sum, lesson) => {
                    return sum + lesson.duration;
                  }, 0)
                );
              }, 0) * 1000,
            )
              .toISOString()
              .substr(11, 5) + " min"
          }
          handleInscription={handleInscription}
        />
        {/* body */}
        <div className="flex flex-row justify-between">
          {/* course info */}
          <CourseInfo
            description={data.description}
            userName={data.user.name ? data.user.name : "Anonimo"}
            userProfession={
              data.user.profession ? data.user.profession : "Instructor"
            }
            userImageUrl={data.user.image ? data.user.image : "/user.png"}
            skills={data.skills}
          />
          {/* explorer */}
          <div className="flex h-[525px] w-[333px] shrink-0 flex-col gap-6 overflow-y-scroll border border-solid border-[#BABABA] p-4">
            {data.sections.map((section) => (
              <ExplorerOutsideContainer
                key={section.title}
                title={section.title}
                lessons={section.lessons.map((lesson) => ({
                  title: lesson.title,
                  time:
                    new Date(lesson.duration * 1000)
                      .toISOString()
                      .substr(11, 5) + " min",
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

  helpers.course.read.prefetch({ id: slug }).catch((err) => {
    console.error(err);
  });

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
