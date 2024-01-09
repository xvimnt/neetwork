import React from "react";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { type RouterOutputs, api } from "~/utils/api";
import { UILoadingPage } from "~/components/UI/UILoader";
import { type InferGetStaticPropsType } from "next";
import UIModal from "~/components/UI/UIModal";
import { CancelIcon, CoinsIcon, ThreeDotsIcon } from "~/components/UI/Icons";
import { UIButtonDropdown } from "~/components/UI/UIButtonDropdown";
import Image from "next/image";
import { LayoutTableData } from "~/components/layouts/LayoutTableData";
import toast from "react-hot-toast";

type courseGetInfinite = RouterOutputs["course"]["readInfinite"]["courses"];
type Unpacked<T> = T extends (infer U)[] ? U : T;

enum Actions {
  UNAVAILABLE = "unavailable",
  AVAILABLE = "available",
}

const columns = ["Identificador", "Instructor", "Estado", "Acciones"];

const getRows = (
  page: courseGetInfinite | undefined,
  getActions: (course: Unpacked<courseGetInfinite>) => {
    label: React.JSX.Element;
    onClick: () => void;
  }[],
) => {
  if (!page) return [];
  const rows: React.JSX.Element[][] | React.ReactNode[][] = [];

  page.forEach((course) => {
    const row = [];

    // Name
    row.push(
      <div className="flex flex-row items-center">
        {course.imageUrl ? (
          <Image
            className="mr-2 shrink-0 rounded-full border-2 border-white object-cover dark:border-primary-700"
            src={course.imageUrl}
            alt=""
            width={40}
            height={40}
          />
        ) : (
          <></>
        )}
        <div>
          <h2 className="font-medium text-primary-800 dark:text-white">
            {course.title}
          </h2>
          <p className="text-sm font-normal text-primary-600 hover:text-primary-500 hover:underline dark:text-secondary-400">
            {course.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>,
    );

    // Name
    row.push(
      <div className="flex flex-row items-center">
        {course.user.image ? (
          <Image
            className="mr-2 shrink-0 rounded-full border-2 border-white object-cover dark:border-primary-700"
            src={course.user.image}
            alt=""
            width={40}
            height={40}
          />
        ) : (
          <></>
        )}
        <div>
          <h2 className="font-medium text-primary-800 dark:text-white">
            {course.user.name}
          </h2>
          <a
            className="text-sm font-normal text-primary-600 hover:text-primary-500 hover:underline dark:text-secondary-400"
            href={`mailto:${course.user.email}`}
          >
            {course.user.email}
          </a>
        </div>
      </div>,
    );

    // status
    row.push(
      <div
        className={`inline gap-x-2 rounded-full ${
          {
            unavailable: "bg-red-100/80 text-red-500",
            available: "bg-primary-100/80 text-primary-700",
          }[course.status ? course.status : "unavailable"]
        }  flex justify-center px-3 py-1 text-sm font-normal`}
      >
        {
          {
            unavailable: "Desactivado",
            available: "Vendedor",
          }[course.status ? course.status : "course"]
        }
      </div>,
    );

    // Acciones
    row.push(
      <div className="flex flex-col">
        <UIButtonDropdown
          icon={<ThreeDotsIcon />}
          elements={getActions(course)}
        />
      </div>,
    );

    rows.push(row);
  });
  return rows;
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function Courses(_props: PageProps) {
  // State for the page
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCourse, setSelectedCourse] =
    React.useState<Unpacked<courseGetInfinite> | null>(null);
  const [selectedState, setSelectedState] = React.useState<string>("");
  const [filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const textModal = React.useRef<React.ReactNode | null>(null);

  // use the `useMutation` hook to create a mutation
  const ctx = api.useUtils();
  const { mutate, isLoading: isClosing } = api.course.update.useMutation({
    onSuccess: () => {
      ctx.course.readInfinite.invalidate().catch((err) => {
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

  const updateState = () => {
    if (selectedCourse && selectedState) {
      mutate({
        id: selectedCourse.id,
        status: selectedState,
      });
    }
    setShowModal(false);
  };

  const handleClickAction = (
    course: Unpacked<courseGetInfinite>,
    action: Actions,
  ) => {
    switch (action) {
      case Actions.AVAILABLE:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea desactivar al curso{" "}
              <strong>{course?.title}</strong>
            </p>
          </>
        );
        setSelectedCourse(course);
        setSelectedState("course");
        setShowModal(true);
        break;
      case Actions.UNAVAILABLE:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea activar el curso{" "}
              <strong>{course?.title}</strong>
            </p>
          </>
        );
        setSelectedCourse(course);
        setSelectedState("admin");
        setShowModal(true);
        break;
    }
  };

  const itemsPerPage = 5;
  const { data, fetchNextPage, isLoading } =
    api.course.readInfinite.useInfiniteQuery(
      {
        limit: itemsPerPage,
        status: filter,
        search,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        // initialCursor: 1, // <-- optional you can pass an initialCursor
      },
    );
  const { data: countData } = api.course.countInfinite.useQuery({
    limit: itemsPerPage,
    status: filter,
    search,
  });

  const getActions = (course: Unpacked<courseGetInfinite>) => {
    const actions = [
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <CancelIcon /> Desactivar
          </span>
        ),
        onClick: () => handleClickAction(course, Actions.UNAVAILABLE),
      },
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <CoinsIcon /> Habilitar
          </span>
        ),
        onClick: () => handleClickAction(course, Actions.AVAILABLE),
      },
    ];

    // Remove sell and cancel options if the reservation is not reserved
    if (course.status === Actions.AVAILABLE) actions.splice(0, 1);
    if (course.status === Actions.AVAILABLE) actions.splice(1, 1);

    return actions;
  };

  // The following code fetch a new page when the page changes
  const handleNext = async () => {
    await fetchNextPage();
    setPage((prev) => prev + 1);
  };

  if (isClosing) return <UILoadingPage />;
  if (isLoading) return <UILoadingPage />;
  return (
    <>
      <LayoutSigned role="admin">
        <UIModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={`Confirmar cambio de rol`}
          text={textModal.current}
          onSave={updateState}
        />
        <LayoutTableData
          title="Cursos"
          description="Cursos registrados en el sistema."
          rows={getRows(data?.pages[page - 1]?.courses, getActions)}
          columns={columns}
          page={page}
          setPage={setPage}
          totalPages={countData?.pagesCount ?? 1}
          totalElements={countData?.count ?? 0}
          handleNext={handleNext}
          search={search}
          setSearch={setSearch}
          filters={[
            {
              label: "Todas",
              value: "",
            },
            {
              label: "Desactivados",
              value: "course",
            },
            {
              label: "Vendedores",
              value: "salesperson",
            },
            {
              label: "Administradores",
              value: "admin",
            },
          ]}
          filter={filter}
          setFilter={setFilter}
        />
      </LayoutSigned>
    </>
  );
}

// Fetch data before the page loads
export const getStaticProps = () => {
  const helpers = generateSSGHelper();

  helpers.course.readInfinite.prefetch({}).catch((err) => {
    console.error(err);
  });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
    },
  };
};
