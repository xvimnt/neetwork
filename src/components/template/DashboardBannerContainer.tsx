import React, { useCallback, useEffect } from "react";
import { api } from "~/utils/api";
import { UILoader, UILoadingPage } from "../UI/UILoader";
import { DashboardBanner } from "./DashboardBanner";

export const DashboardBannerContainer = () => {
  const [page, setPage] = React.useState(0);
  const { data, fetchNextPage, isLoading } =
    api.course.readInfinite.useInfiniteQuery(
      {
        limit: 1,
        mostRecent: true,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        // initialCursor: page, // <-- optional you can pass an initialCursor
      },
    );

  // get the current page with 1 item
  const currentPage = data?.pages[page];

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

  // fetch next every 3 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      await handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNext, page]);

  // get the current course
  const currentCourse = currentPage?.courses[0];
  if (isLoading) return <UILoadingPage />;
  if (!currentCourse) return <div>no hay cursos {page}</div>;
  return (
    <>
      <DashboardBanner
        key={currentCourse.id}
        id={currentCourse.id}
        authorName={
          currentCourse.user.name ? currentCourse.user.name : "Anonimo"
        }
        authorTitle={
          currentCourse.user.profession
            ? currentCourse.user.profession
            : "Instructor"
        }
        authorImageUrl={
          currentCourse.user.image
            ? currentCourse.user.image
            : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fHww"
        }
        timeAgo={
          new Date(
            new Date().getDate() - currentCourse.createdAt.getDate(),
          ).getDay() + " dias"
        }
        imageUrl={currentCourse.imageUrl}
        title={currentCourse.title}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
};
