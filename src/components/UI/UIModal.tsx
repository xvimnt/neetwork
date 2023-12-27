import React from "react";
import { UIButton } from "./UIButton";

export default function UIModal({
  showModal,
  setShowModal,
  title,
  text,
  onSave,
  size = "2xl",
  children,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  title: string;
  text?: string | JSX.Element;
  onSave?: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  children?: React.ReactNode;
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className={`relative mx-auto my-6 w-full max-w-5xl`}>
              {/*content*/}
              <div className="relative flex w-full flex-col border-0 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="ui-modal__header flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold ">{title}</h3>
                </div>
                {/*body*/}
                <div className="relative max-h-[70vh] flex-auto overflow-y-scroll bg-white p-6 ">
                  {children ? children : text}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-2 rounded-b border-t border-solid bg-white p-6 ">
                  <UIButton
                    onClick={() => setShowModal(false)}
                    type="button"
                    label="Cancelar"
                    className="!w-60 bg-red-500 !text-white"
                  />
                  {onSave && (
                    <UIButton
                      onClick={onSave}
                      type="button"
                      label="Guardar Cambios"
                      className="!w-60"
                      isPrimary
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
