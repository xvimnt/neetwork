import React from "react";
import { FormInput } from "~/components/forms/FormInput";
import { FormLabelLayout } from "~/components/forms/FormLabelLayout";
import { FormTextArea } from "~/components/forms/FormTextArea";
import { FormTimeDatePicker } from "~/components/forms/FormTimeDatePicker";

export const CreateEventForm = ({
  form,
}: {
  form: React.MutableRefObject<HTMLFormElement>;
}) => {
  const [startTime, setStartTime] = React.useState<Date | null>(new Date());
  const [endTime, setEndTime] = React.useState<Date | null>(new Date());

  return (
    <>
      <form className="w-full max-w-lg" ref={form}>
        <FormLabelLayout label="Titulo">
          <FormInput name="title" placeholder="Evento" type="text" />
        </FormLabelLayout>

        <div className="flex flex-col">
          <label className="dark:text-tertiary-50 mb-2 mt-8 text-sm leading-4 text-tertiary-800">
            Hora de Inicio
          </label>
          <FormTimeDatePicker
            startTime={startTime}
            setStartTime={setStartTime}
            name="startTime"
          />
        </div>
        <div className="flex flex-col">
          <FormLabelLayout label="Hora de Finalizacion">
            <FormTimeDatePicker
              startTime={endTime}
              setStartTime={setEndTime}
              name="endTime"
            />
          </FormLabelLayout>
        </div>
        <FormLabelLayout label="Descripcion">
          <FormTextArea name="description" placeholder="Descripcion" />
        </FormLabelLayout>
      </form>
    </>
  );
};
