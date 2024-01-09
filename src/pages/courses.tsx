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
  const [page, setPage] = useState(0);
  const [value, setValue] = useState("");

  const { data: coursesData, isLoading: isLoadingAll } =
    api.course.readAll.useQuery({});

  const {
    data: courses,
    fetchNextPage,
    isLoading,
  } = api.course.readInfinite.useInfiniteQuery(
    {
      limit: 2,
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

  // get skills for all courses and turn them into a signle array without duplicates
  const getSkills = () => {
    const skills = coursesData?.map((course) => course.skills);
    const skillsArray = skills?.flat();
    const skillsSet = new Set(skillsArray);
    return [...skillsSet];
  };

  if (isLoading || isLoadingAll) return <UILoadingPage />;
  if (!currentPage) return null;

  return (
    <LayoutSigned>
      <div className="flex w-full flex-col gap-[5%] lg:flex-row">
        <div className="flex w-full flex-col gap-8 lg:w-[70%]">
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
          <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-3">
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
          <div className="flex flex-col gap-4">
            <h2 className="text-[20px] font-bold not-italic leading-[normal] text-black">
              Habilidades
            </h2>
            <hr className="h-[1px] bg-[#808080]" />
            <div className="flex flex-row gap-2">
              {getSkills().map((skill) => (
                <span
                  className="flex cursor-pointer items-center justify-center gap-2.5 text-nowrap rounded-[50px] border border-[#525252] px-[9px] py-[5px] text-left text-[12px] font-normal not-italic leading-[normal] text-[#525252]"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-fit w-full shrink-0 flex-col gap-6 border border-solid border-[#acacac] p-8 lg:w-[25%]">
          <h2 className="mb-4 text-[20px] font-bold not-italic leading-[normal] text-black">
            Filtros
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold not-italic leading-[normal] text-black">
              Precio
            </h3>
            {/* radio buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price1" />
                <label
                  htmlFor="price1"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Gratis
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Economico
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Regular
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  La mejor calidad
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold not-italic leading-[normal] text-black">
              Duracion
            </h3>
            {/* radio buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price1" />
                <label
                  htmlFor="price1"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Corto
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Regular
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Largo
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold not-italic leading-[normal] text-black">
              Popularidad
            </h3>
            {/* radio buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price1" />
                <label
                  htmlFor="price1"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Pocos Inscritos
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Regular
                </label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="price" id="price2" />
                <label
                  htmlFor="price2"
                  className="text-[11px] font-bold not-italic leading-[normal] text-[#515151]"
                >
                  Los mas comprados
                </label>
              </div>
            </div>
          </div>
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
