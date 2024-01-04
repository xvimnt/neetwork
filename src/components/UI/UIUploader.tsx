"use client";

import {
  useState,
  useCallback,
  useMemo,
  type ChangeEvent,
  useRef,
} from "react";
import toast from "react-hot-toast";
import { UILoader } from "./UILoader";
import { uploadFile } from "~/utils/functions";

export default function UIUploader({
  file,
  setFile,
  hasUploadButton = true,
  accept = "image/*",
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  hasUploadButton?: boolean;
  accept?: string;
}) {
  const [data, setData] = useState<{
    image: string | null;
  }>({
    image: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files?.[0];
      if (file) {
        if (file.size / 1024 / 1024 > 50) {
          toast.error("File size too big (max 50MB)");
        } else {
          setFile(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setData((prev) => ({ ...prev, image: e.target?.result as string }));
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [setFile],
  );

  const submitFile = async () => {
    if (!file) return toast.error("No file selected");
    setSaving(true);
    const url = await uploadFile(file);
    if (url) {
      toast(
        (t) => (
          <div className="relative">
            <div className="p-2">
              <p className="font-semibold text-gray-900">Archivo subido!</p>
              <p className="mt-1 text-sm text-gray-500">
                Tu archivo ha sido subido con exito
              </p>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="absolute -right-2 top-0 inline-flex rounded-full p-1.5 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 focus:text-gray-500 focus:outline-none"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10
                      8.586l3.293-3.293a1 1 0 111.414 1.414L11.414
                      10l3.293 3.293a1 1 0 01-1.414 1.414L10
                      11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586
                      10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ),
        { duration: 300000 },
      );
    }
    setSaving(false);
  };

  const [saving, setSaving] = useState(false);

  const saveDisabled = useMemo(() => {
    return !data.image || saving;
  }, [data.image, saving]);

  return (
    <form className="grid gap-6">
      <div>
        <div className="mb-4 space-y-1">
          <h2 className="text-xl font-semibold">Sube un archivo</h2>
          <p className="text-sm text-gray-500">
            Formatos aceptados: .png, .jpg, .gif, .mp4
          </p>
        </div>
        <label
          onClick={() => inputRef?.current?.click()}
          className="group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
        >
          <div
            className="absolute z-[5] h-full w-full rounded-md"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(true);
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(false);

              const file = e.dataTransfer.files?.[0];
              if (file) {
                if (file.size / 1024 / 1024 > 50) {
                  toast.error("File size too big (max 50MB)");
                } else {
                  setFile(file);
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setData((prev) => ({
                      ...prev,
                      image: e.target?.result as string,
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }
            }}
          />
          <div
            className={`${
              dragActive ? "border-2 border-black" : ""
            } absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all ${
              data.image
                ? "bg-white/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md"
                : "bg-white opacity-100 hover:bg-gray-50"
            }`}
          >
            <svg
              className={`${
                dragActive ? "scale-110" : "scale-100"
              } h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
              <path d="M12 12v9"></path>
              <path d="m16 16-4-4-4 4"></path>
            </svg>
            <p className="mt-2 text-center text-sm text-gray-500">
              Arrastra o clickea para subir.
            </p>
            <p className="mt-2 text-center text-sm text-gray-500">
              Tamaño maximo: 50MB
            </p>
            <span className="sr-only">Photo upload</span>
          </div>
          {data.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.image}
              alt="Preview"
              className="h-full w-full rounded-md object-cover"
            />
          )}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            ref={inputRef}
            name="image"
            type="file"
            accept={accept}
            className="sr-only"
            onChange={onChangePicture}
          />
        </div>
      </div>

      {hasUploadButton && (
        <button
          disabled={saveDisabled}
          type="button"
          onClick={submitFile}
          className={`${
            saveDisabled
              ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {saving ? <UILoader /> : <p className="text-sm">Confirmar Subida</p>}
        </button>
      )}
    </form>
  );
}
