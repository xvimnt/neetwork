import React, { useRef } from "react";
import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { type RouterOutputs, api } from "~/utils/api";
import { UILoadingPage } from "~/components/UI/UILoader";
import { type InferGetStaticPropsI } from "next";
import UIModal from "~/components/UI/UIModal";
import {
  CancelIcon,
  CoinsIcon,
  GlassesIcon,
  StarIcon,
  ThreeDotsIcon,
} from "~/components/UI/Icons";
import { UIButtonDropdown } from "~/components/UI/UIButtonDropdown";
import Image from "next/image";
import { LayoutTableData } from "~/components/layouts/LayoutTableData";
import toast from "react-hot-toast";

type UserGetInfinite = RouterOutputs["user"]["getInfinite"]["users"];
type Unpacked<T> = T extends (infer U)[] ? U : T;

enum Actions {
  DISABLE = 0,
  ADMIN = 1,
  SALESPERSON = 2,
  SUPERVISOR = 3,
}

const columns = ["Identificador", "Fecha de creacion", "Rol", "Acciones"];

const getRows = (
  page: UserGetInfinite | undefined,
  getActions: (user: Unpacked<UserGetInfinite>) => {
    label: React.JSX.Element;
    onClick: () => void;
  }[],
) => {
  if (!page) return [];
  const rows: React.JSX.Element[][] | React.ReactNode[][] = [];

  page.forEach((user) => {
    const row = [];

    // Name
    row.push(
      <div className="flex flex-row items-center">
        {user.image ? (
          <Image
            className="mr-2 shrink-0 rounded-full border-2 border-white object-cover dark:border-primary-700"
            src={user.image}
            alt=""
            width={40}
            height={40}
          />
        ) : (
          <></>
        )}
        <div>
          <h2 className="font-medium text-primary-800 dark:text-white">
            {user.name}
          </h2>
          <a
            className="text-sm font-normal text-primary-600 hover:text-primary-500 hover:underline dark:text-secondary-400"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </div>
      </div>,
    );

    // Email
    row.push(
      <div>
        <h2 className="font-medium text-primary-800 dark:text-white ">
          {user.createdAt.toDateString()}
        </h2>
      </div>,
    );

    // Role
    row.push(
      <div
        className={`inline gap-x-2 rounded-full ${
          {
            user: "bg-red-100/80 text-red-500",
            admin: "bg-emerald-100/60 text-emerald-500",
            salesperson: "bg-primary-100/80 text-primary-700",
            supervisor: "bg-blue-100/80 text-blue-700",
          }[user.role ? user.role : "user"]
        }  flex justify-center px-3 py-1 text-sm font-normal`}
      >
        {
          {
            user: "Desactivado",
            admin: "Administrador",
            salesperson: "Vendedor",
            supervisor: "Supervisor",
          }[user.role ? user.role : "user"]
        }
      </div>,
    );

    // Acciones
    row.push(
      <div className="flex flex-col">
        <UIButtonDropdown
          icon={<ThreeDotsIcon />}
          elements={getActions(user)}
        />
      </div>,
    );

    rows.push(row);
  });
  return rows;
};

type PageProps = InferGetStaticPropsI<typeof getStaticProps>;
export default function Users(_props: PageProps) {
  // State for the page
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] =
    React.useState<Unpacked<UserGetInfinite> | null>(null);
  const [selectedState, setSelectedState] = React.useState<string>("user");
  const [filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const textModal = useRef<JSX.Element>(<></>);

  // use the `useMutation` hook to create a mutation
  const ctx = api.useContext();
  const { mutate, isLoading: isClosing } = api.user.updateRole.useMutation({
    onSuccess: () => {
      ctx.user.getInfinite.invalidate().catch((err) => {
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
    if (selectedUser && selectedState) {
      mutate({
        id: selectedUser.id,
        role: selectedState,
      });
    }
    setShowModal(false);
  };

  const handleClickAction = (
    user: Unpacked<UserGetInfinite>,
    action: Actions,
  ) => {
    switch (action) {
      case Actions.DISABLE:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea desactivar al usuario{" "}
              <strong>{user?.name}</strong>
            </p>
          </>
        );
        setSelectedUser(user);
        setSelectedState("user");
        setShowModal(true);
        break;
      case Actions.ADMIN:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea cambiar a admin al usuario{" "}
              <strong>{user?.name}</strong>
            </p>
          </>
        );
        setSelectedUser(user);
        setSelectedState("admin");
        setShowModal(true);
        break;
      case Actions.SALESPERSON:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea cambiar a vendedor al usuario{" "}
              <strong>{user?.name}</strong>
            </p>
          </>
        );
        setSelectedUser(user);
        setSelectedState("salesperson");
        setShowModal(true);
        break;
      case Actions.SUPERVISOR:
        textModal.current = (
          <>
            <p className="my-4 text-lg leading-relaxed text-primary-700">
              ¿Está seguro que desea cambiar a supervisor al usuario{" "}
              <strong>{user?.name}</strong>
            </p>
          </>
        );
        setSelectedUser(user);
        setSelectedState("supervisor");
        setShowModal(true);
        break;
    }
  };

  const itemsPerPage = 5;
  const { data, fetchNextPage, isLoading } =
    api.user.getInfinite.useInfiniteQuery(
      {
        limit: itemsPerPage,
        role: filter,
        search,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        // initialCursor: 1, // <-- optional you can pass an initialCursor
      },
    );
  const { data: countData } = api.user.getCount.useQuery({
    limit: itemsPerPage,
    role: filter,
    search,
  });

  const getActions = (user: Unpacked<UserGetInfinite>) => {
    const actions = [
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <CancelIcon /> Desactivar
          </span>
        ),
        onClick: () => handleClickAction(user, Actions.DISABLE),
      },
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <CoinsIcon /> Vendedor
          </span>
        ),
        onClick: () => handleClickAction(user, Actions.SALESPERSON),
      },
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <StarIcon /> Admin
          </span>
        ),
        onClick: () => handleClickAction(user, Actions.ADMIN),
      },
      {
        label: (
          <span className="flex flex-row items-center justify-items-center gap-2 hover:text-primary-500">
            <GlassesIcon className="h-4 w-4" /> Supervisor
          </span>
        ),
        onClick: () => handleClickAction(user, Actions.SUPERVISOR),
      },
    ];

    // Remove sell and cancel options if the reservation is not reserved
    if (user.role === "user") actions.splice(0, 1);
    if (user.role === "salesperson") actions.splice(1, 1);
    if (user.role === "admin") actions.splice(2, 1);
    if (user.role === "supervisor") actions.splice(3, 1);

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
          title="Usuarios"
          description="Usuarios registrados en el sistema."
          rows={getRows(data?.pages[page - 1]?.users, getActions)}
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
              value: "user",
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

  helpers.user.getInfinite.prefetch({}).catch((err) => {
    console.error(err);
  });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
    },
  };
};
