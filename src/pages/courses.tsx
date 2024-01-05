import { type GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { UILoadingPage } from "~/components/UI/UILoader";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { CourseCardLarge } from "~/components/template/CourseCardLarge";
import { SavedCoursesTabs } from "~/components/template/SavedCoursesTabs";
import { getServerAuthSession } from "~/server/auth";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const session = useSession();

  const {
    data: assignations,
    fetchNextPage,
    isLoading,
  } = api.assignation.readInfinite.useInfiniteQuery(
    {
      limit: 5,
      userId: session?.data?.user?.id,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      // initialCursor: page, // <-- optional you can pass an initialCursor
    },
  );

  // get the current page with 1 item
  const currentPage = assignations?.pages[page];

  // fetch next if there is a next page
  const handleNext = useCallback(async () => {
    const pagesCount = currentPage?.pagesCount;
    if (pagesCount) {
      await fetchNextPage();
      if (page < pagesCount - 1) setPage((prev) => prev + 1);
      else setPage(0);
    }
  }, [currentPage, fetchNextPage, page]);

  // fetch previous if there is a previous page
  const handlePrevious = () => {
    const pagesCount = currentPage?.pagesCount;
    if (page > 0) setPage((prev) => prev - 1);
    else if (pagesCount) setPage(pagesCount - 1);
  };

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

  const currentPageAssignations = assignations?.pages[page]?.assignations;

  if (isLoading) return <UILoadingPage />;

  return (
    <LayoutSigned>
      <div className="flex flex-col gap-8 py-10">
        <SavedCoursesTabs tabs={tabs} />
        {currentPageAssignations ? (
          currentPageAssignations.map((assignation) => (
            <CourseCardLarge
              key={assignation.id}
              courseId={assignation.course.id}
              title={assignation.course.title}
              authorName={
                assignation.user.name ? assignation.user.name : "Anonimo"
              }
              progress={assignation.progress}
              imageUrl={assignation.course.imageUrl}
              date={assignation.createdAt.toLocaleDateString()}
            />
          ))
        ) : (
          <div className=" flex h-full w-full flex-row items-center justify-center">
            <p className="text-4xl font-bold">No tienes cursos</p>
          </div>
        )}
      </div>
    </LayoutSigned>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  const helpers = generateSSGHelper();

  await helpers.assignation.readInfinite.prefetch({
    userId: session?.user?.id,
  });

  return {
    props: {
      // id: id,
      session: session,
    },
  };
}
