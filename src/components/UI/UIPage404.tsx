import NotFound from "../../assets/img/notFound.gif";
import Image from "next/image";

export const UINotFound = (props: { size?: number }) => {
  return (
    <Image
      src={NotFound}
      width={props.size ?? 550}
      height={props.size ?? 550}
      alt="loading"
    />
  );
};

export const UIPage404 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <UINotFound />
      <h1 className="mt-4 text-center text-4xl font-bold">
        Lo sentimos, no encontramos lo que buscabas
      </h1>
    </div>
  );
};
