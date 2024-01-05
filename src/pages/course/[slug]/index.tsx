import {
  type GetServerSidePropsContext,
  type InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import WhiteGradient from "~/assets/svg/white-gradient.svg";
import { GraduationIcon } from "~/components/UI/Icons";
import { ExplorerOutsideContainer } from "~/components/template/ExplorerOutsideContainer";
import Link from "next/link";
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

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Course({ courseId }: PageProps) {
  const [showModal, setShowModal] = useState(false);

  const addAssignationFormRef = useRef<HTMLFormElement>(null);

  // use the `useMutation` hook to create a mutation
  const ctx = api.useUtils();
  const { mutate, isLoading: isCreating } = api.assignation.create.useMutation({
    onSuccess: async () => {
      // ctx.course.readInfinite.invalidate().catch((err) => {
      //   console.error(err);
      // });
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
  if (isLoading || assignationLoading) return <UILoadingPage />;
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
        <div className="flex w-full flex-row">
          {/* image */}
          <div className="relative h-60 w-[70%] shrink-0">
            <Image src={data.imageUrl} alt="curso" fill objectFit="cover" />

            <div className="absoulte left-0 right-0 top-0 h-60 w-[70%] shrink-0">
              <Image src={WhiteGradient} alt="curso" fill objectFit="cover" />
            </div>
          </div>
          {/* course info */}
          <div className="flex w-full flex-col items-end justify-center gap-4">
            {/* title */}
            <h1 className=" text-end text-3xl font-bold not-italic leading-[normal] text-black">
              {data.title}
            </h1>
            {/* info */}
            <h2 className="text-[15px] font-semibold not-italic leading-[normal] text-[#383838]">
              {new Date(
                data.sections.reduce((total, section) => {
                  return (
                    total +
                    section.lessons.reduce((sum, lesson) => {
                      return (sum + lesson.duration) as number;
                    }, 0)
                  );
                }, 0) * 1000,
              )
                .toISOString()
                .substr(11, 5) + " min"}{" "}
              - Desde el {data.createdAt.toLocaleDateString()}
            </h2>
            {/* number of students */}
            <div className="flex flex-row gap-2">
              <GraduationIcon className="fill-[#C7E21C]" />
              <p className="leading-[normal]; text-[13px] font-normal not-italic text-[#383838]">
                {assignationCount ? assignationCount : 0} Inscritos
              </p>
            </div>
            {/* cta */}
            {assignation ? (
              <Link
                href={`${courseId}/play`}
                className="flex h-10 w-[157px] shrink-0 items-center justify-center rounded-[5px] bg-[#c7e21c] font-semibold hover:bg-[#becf4f]"
              >
                Empezar
              </Link>
            ) : (
              <button
                onClick={handleInscription}
                className="flex h-10 w-[157px] shrink-0 items-center justify-center rounded-[5px] bg-[#c7e21c] font-semibold hover:bg-[#becf4f]"
              >
                Inscribirse
              </button>
            )}
          </div>
        </div>
        {/* body */}
        <div className="flex flex-row justify-between">
          {/* course info */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
                Descripcion del curso
              </h2>
              <article className="w-[601px] text-left text-[17px] font-light not-italic leading-[normal] text-[#383838]">
                {data.description}
              </article>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
                Instructor
              </h2>
              <div className="flex flex-row gap-2">
                <div className="relative h-10 w-10 shrink-0 rounded-[40px]">
                  <Image
                    src={data.user.image ? data.user.image : "/user.png"}
                    fill
                    objectFit="cover"
                    alt="user"
                    className="rounded-[40px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-left text-[17px] font-normal not-italic leading-[normal] text-[#383838]">
                    {data.user.name}
                  </p>
                  <p className="text-left text-sm font-light not-italic leading-[normal] text-[#666]">
                    {data.user.profession}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
                Habilidades Nuevas
              </h2>
              <div className="flex flex-row gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex  items-center justify-center gap-2.5 rounded-[50px] border border-[#525252] px-[9px] py-[5px] text-left text-[12px] font-normal not-italic leading-[normal] text-[#525252]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* explorer */}
          <div className="flex h-[525px] w-[333px] shrink-0 flex-col gap-6 overflow-y-scroll border border-solid border-[#BABABA] p-4">
            {data.sections.map((section) => (
              <ExplorerOutsideContainer
                key={section.title}
                title={section.title}
                videos={section.lessons.map((lesson) => ({
                  title: lesson.title,
                  time:
                    new Date(lesson.duration * 1000)
                      .toISOString()
                      .substr(11, 5) + " min",
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
