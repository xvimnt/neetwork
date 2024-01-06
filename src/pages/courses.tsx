import { type GetServerSidePropsContext } from "next";
import { useState } from "react";
import { UIButtonsPagination } from "~/components/UI/UIButtonsPagination";
import { UIDebouncer } from "~/components/UI/UIDebouncer";
import { UILoadingPage } from "~/components/UI/UILoader";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { CourseCard } from "~/components/template/CourseCard";
import { getServerAuthSession } from "~/server/auth";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [value, setValue] = useState("");

  const {
    data: courses,
    fetchNextPage,
    isLoading,
  } = api.course.readInfinite.useInfiniteQuery(
    {
      limit: 1,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      // initialCursor: page, // <-- optional you can pass an initialCursor
    },
  );

  const handleNext = async () => {
    await fetchNextPage();
    setPage((page) => page + 1);
  };

  const currentPage = courses?.pages[page];

  if (isLoading) return <UILoadingPage />;
  if (!currentPage) return null;

  return (
    <LayoutSigned>
      <div className="flex w-[70%] flex-col">
        <div className="flex w-full flex-row items-center justify-center">
          <div className="w-full lg:w-[40%]">
            <UIDebouncer value={value} setValue={setValue} />
          </div>
        </div>
        <UIButtonsPagination
          page={page}
          setPage={setPage}
          totalPages={currentPage.pagesCount}
          handleNext={handleNext}
        />
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {currentPage.courses.map((course) => (
            <CourseCard
              id={course.id}
              key={course.id}
              imageUrl={course.imageUrl}
              title={course.title}
              authorName={course.user.name ? course.user.name : "Anonimo"}
            />
          ))}
        </div>
      </div>
    </LayoutSigned>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  const helpers = generateSSGHelper();

  await helpers.course.readInfinite.prefetch({
    limit: 9,
  });

  return {
    props: {
      // id: id,
      session: session,
    },
  };
}
