import { useState } from "react";

// UI
import { AddIcon, HouseIcon, SearchIcon } from "~/components/UI/Icons";
import { UIButtonDropdown } from "~/components/UI/UIButtonDropdown";

// Forms
import { FormDatePicker } from "~/components/forms/FormDatePicker";
import { FormInput } from "~/components/forms/FormInput";
import { FormLabelLayout } from "~/components/forms/FormLabelLayout";
import { FormLayout } from "~/components/forms/FormLayout";
import { FormMonthDatePicker } from "~/components/forms/FormMonthDatePicker";
import { FormRangeDatePicker } from "~/components/forms/FormRangeDatePicker";
import { FormSelect } from "~/components/forms/FormSelect";
import { FormSignature } from "~/components/forms/FormSignature";
import { FormSwitch } from "~/components/forms/FormSwitch";
import { FormTextArea } from "~/components/forms/FormTextArea";
import { FormTimeDatePicker } from "~/components/forms/FormTimeDatePicker";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { UIButtonsPagination } from "~/components/UI/UIButtonsPagination";
import { UICardProp } from "~/components/UI/UICardProp";
import { UIDropdown } from "~/components/UI/UIDropdown";
import { UITabs } from "~/components/UI/UITabs";
import { UIHorizontalCard } from "~/components/UI/UIHorizontalCard";
import { UILoader } from "~/components/UI/UILoader";
import UIModal from "~/components/UI/UIModal";
import { UIPagination } from "~/components/UI/UIPagination";
import { UIStackedCard } from "~/components/UI/UIStackedCard";
import UISteps from "~/components/UI/UISteps";
import { UIButton } from "~/components/UI/UIButton";
import { UITable } from "~/components/UI/UITable";
import { Layout2Columns } from "~/components/layouts/Layout2Columns";
import { LayoutVerticalInfinite } from "~/components/layouts/LayoutVerticalInfinite";
import { LayoutTableData } from "~/components/layouts/LayoutTableData";

const Left = () => {
  const [startDatepicker, setStartDatepicker] = useState<Date>(new Date());
  const [endDatepicker, setEndDatepicker] = useState<Date>(new Date());
  const [signature, setSignature] = useState<File | null>(null);
  const [active, setActive] = useState<boolean>(false);

  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
  ];
  return (
    <FormLayout>
      <FormLabelLayout label="FormInput">
        <FormInput
          placeholder="Ejemplo"
          icon={<SearchIcon className="h-8 w-8" />}
        />
      </FormLabelLayout>

      <FormLabelLayout label="FormSelect">
        <FormSelect options={options} />
      </FormLabelLayout>

      <FormLabelLayout label="FormSignature">
        <FormSignature setSignature={setSignature} />
      </FormLabelLayout>

      <FormLabelLayout label="FormSwitch">
        <FormSwitch active={active} setActive={setActive} />
      </FormLabelLayout>

      <FormLabelLayout label="FormTextArea">
        <FormTextArea />
      </FormLabelLayout>

      <FormLabelLayout label="FormDatePicker">
        <FormDatePicker
          startDate={startDatepicker}
          setStartDate={setStartDatepicker}
        />
      </FormLabelLayout>

      <FormLabelLayout label="FormMonthDatePicker">
        <FormMonthDatePicker
          startDate={startDatepicker}
          setStartDate={setStartDatepicker}
        />
      </FormLabelLayout>

      <FormLabelLayout label="FormTimeDatePicker">
        <FormTimeDatePicker
          startTime={startDatepicker}
          setStartTime={setStartDatepicker}
        />
      </FormLabelLayout>

      <FormLabelLayout label="FormRangeDatePicker">
        <FormRangeDatePicker
          startDate={startDatepicker}
          setStartDate={setStartDatepicker}
          endDate={endDatepicker}
          setEndDate={setEndDatepicker}
        />
      </FormLabelLayout>
    </FormLayout>
  );
};

const Right = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("1");
  const [showModal, setShowModal] = useState<boolean>(false);
  const elements = [
    {
      label: "Elemento 1",
      onClick: () => {
        console.log("Elemento 1");
      },
    },
    {
      label: "Elemento 2",
      onClick: () => {
        console.log("Elemento 2");
      },
    },
    {
      label: "Elemento 3",
      onClick: () => {
        console.log("Elemento 3");
      },
    },
  ];
  const filters = [
    { label: "Filtro 1", value: "1" },
    { label: "Filtro 2", value: "2" },
    { label: "Filtro 3", value: "3" },
  ];
  const steps = [
    { title: "Paso 1", icon: <AddIcon /> },
    { title: "Paso 2", icon: <AddIcon /> },
    { title: "Paso 3", icon: <AddIcon /> },
  ];
  const rows = [
    [<div key={1}>Hola</div>, <div key={1}>Hola</div>],
    [<div key={1}>Hola</div>, <div key={1}>Hola</div>],
  ];
  const columns = [<div key={1}>Hola</div>, <div key={1}>Hola</div>];

  return (
    <FormLayout>
      <FormLabelLayout label="UIButtonDropdown">
        <UIButtonDropdown
          elements={elements}
          icon={<HouseIcon className="h-8 w-8" />}
        />
      </FormLabelLayout>
      <FormLabelLayout label="UIDropdown">
        <UIDropdown text="UIDropdown" elements={elements} />
      </FormLabelLayout>
      <hr className="my-4" />
      <div className="grid gap-2">
        <FormLabelLayout label="UIButtonsPagination">
          <UIButtonsPagination
            page={page}
            setPage={setPage}
            totalPages={20}
            handleNext={async () => {
              await new Promise((resolve) => {
                setTimeout(() => {
                  setPage(page + 1);
                  resolve(null);
                }, 500);
              });
            }}
          />
        </FormLabelLayout>
        <FormLabelLayout label="UIPagination">
          <UIPagination
            page={page}
            handlePagination={async () => {
              await new Promise((resolve) => {
                setTimeout(() => {
                  setPage(page + 1);
                  resolve(null);
                }, 500);
              });
            }}
            totalPages={20}
          />
        </FormLabelLayout>
      </div>
      <hr className="my-4" />
      <div className="grid gap-2">
        <FormLabelLayout label="UITabs">
          <UITabs filters={filters} filter={filter} setFilter={setFilter} />
        </FormLabelLayout>
        <FormLabelLayout label="UISteps">
          <UISteps steps={steps} currentStep={2} />
        </FormLabelLayout>
      </div>
      <hr className="my-4" />
      <FormLabelLayout label="UITable">
        <UITable rows={rows} columns={columns} />
      </FormLabelLayout>
      <hr className="my-4" />
      <FormLabelLayout label="UIHorizontalCard">
        <UIHorizontalCard imageSrc="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHx8MHx8fDA%3D">
          <div className="grid gap-2">
            {[1, 2, 3].map((item) => (
              <UICardProp
                key={item}
                title="Title"
                values={["value", "value"]}
                icon={<AddIcon />}
              />
            ))}
          </div>
        </UIHorizontalCard>
      </FormLabelLayout>

      <FormLabelLayout label="UIStackedCard">
        <UIStackedCard imageSrc="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHx8MHx8fDA%3D">
          <div className="grid gap-2">
            {[1, 2, 3].map((item) => (
              <UICardProp
                key={item}
                title="Title"
                values={["value", "value"]}
                icon={<AddIcon />}
              />
            ))}
          </div>
        </UIStackedCard>
      </FormLabelLayout>
      <hr className="my-4" />

      <UILoader />

      <UIButton
        type="button"
        onClick={() => setShowModal(true)}
        label="Open modal"
        isPrimary
      />

      <UIModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="UI Modal"
      >
        <Layout2Columns
          left={
            <LayoutTableData
              title="UIDataLayout"
              description="UIDataLayout description"
              rows={rows}
              columns={columns}
              page={page}
              setPage={setPage}
              totalPages={20}
              totalElements={100}
              search={search}
              setSearch={setSearch}
              handleNext={async () => {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    setPage(page + 1);
                    resolve(null);
                  }, 500);
                });
              }}
              filters={filters}
              filter={filter}
              setFilter={setFilter}
            />
          }
          right={
            <LayoutVerticalInfinite
              itemPage={
                <div className="grid gap-2">
                  {[1, 2].map((item) => (
                    <UIHorizontalCard
                      key={item}
                      imageSrc="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW58ZW58MHx8MHx8fDA%3D"
                    >
                      <div className="grid gap-2">
                        {[1, 2, 3].map((item) => (
                          <UICardProp
                            key={item}
                            title="Title"
                            values={["value", "value"]}
                            icon={<AddIcon />}
                          />
                        ))}
                      </div>
                    </UIHorizontalCard>
                  ))}
                </div>
              }
              page={2}
              totalPages={20}
              handlePagination={async () => {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    setPage(page + 1);
                    resolve(null);
                  }, 500);
                });
              }}
            />
          }
        />
      </UIModal>
    </FormLayout>
  );
};

export default function Home() {
  // const { data, isLoading } = api.project.getAll.useQuery({
  //   fetchLots: true,
  //   fetchAvailableLots: true,
  // });
  // if (isLoading) return <UILoadingPage />;
  return <Layout2Columns left={<Left />} right={<Right />} />;
}

// Fetch data before the page loads
export const getStaticProps = () => {
  const helpers = generateSSGHelper();

  // helpers.project.getAll
  //   .prefetch({ fetchLots: true, fetchAvailableLots: true })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  return {
    props: {
      // very important - use `trpcState` as the key
      trpcState: helpers.dehydrate(),
    },
  };
};
