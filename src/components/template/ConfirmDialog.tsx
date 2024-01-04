import React from "react";

interface PropsI {
  title: string | React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmDialog = ({
  title,
  children,
  onClose,
  onConfirm,
}: PropsI) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-md font-normal">{children}</p>
      <div className="flex flex-row gap-1">
        <button
          className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border px-8 py-2.5  hover:bg-[#eeff7e]"
          onClick={onClose}
        >
          No, salir
        </button>
        <button
          className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border border-[#c7e21c] bg-[#c7e21c] px-8 py-2.5 hover:bg-[#eeff7e]"
          onClick={() => {
            // this.handleClickDelete();
            onConfirm();
            onClose();
          }}
        >
          <span className="font-semibold not-italic leading-[normal] text-black">
            Si, adelante!
          </span>
        </button>
      </div>
    </div>
  );
};
