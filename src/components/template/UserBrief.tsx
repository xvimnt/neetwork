import { useSession } from "next-auth/react";
import React from "react";
import { UILoadingPage } from "../UI/UILoader";
import Image from "next/image";
import { api } from "~/utils/api";
import toast from "react-hot-toast";

export const UserBrief = () => {
  const session = useSession();

  const { mutate: update } = api.user.update.useMutation({
    onSuccess: async () => {
      // ctx.user.readInfinite.invalidate().catch((err) => {
      //   console.error(err);
      // });
      if (!session.data?.user) return;
      await session.update({
        data: {
          ...session.data,
          user: {
            ...session.data.user,
            profession: session.data.user.profession,
          },
        },
      });
      toast.success("Profesion actualizada con exito.");
    },
    onError: (err) => {
      const errorMessage = err?.data?.zodError?.fieldErrors?.content?.[0];
      toast.error(
        errorMessage ?? "Something went wrong. Please try again later.",
      );
    },
  });

  if (!session.data?.user) return <UILoadingPage />;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const profession = data.get("profession") as string;
    if (!profession) return;
    update({ profession, id: session.data.user.id });
  };

  return (
    <div className="flex flex-row">
      {/* user brief */}
      <div className="flex h-[269px] w-1/2 flex-col items-center justify-center gap-4 border border-[#BDBDBD]">
        <div className="flex flex-row items-center gap-4">
          <div className="relative h-[45px] w-[45px] rounded-full">
            <Image
              src={session.data.user.image ?? "/images/user.svg"}
              alt="user"
              fill
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold not-italic leading-[normal] text-black">
              {session.data.user.name}
            </h2>
            <p className="text-[16px] font-bold not-italic leading-[normal] text-gray-500">
              {session.data.user.profession}
            </p>
          </div>
        </div>
      </div>
      {/* user edit info */}
      <form
        onSubmit={handleSubmit}
        className="flex w-1/2 flex-col items-center justify-center gap-4 border border-[#BDBDBD]"
      >
        <span className="text-xl font-semibold not-italic leading-[normal] text-black">
          Profesion:
        </span>
        <input
          name="profession"
          defaultValue={session.data.user.profession}
          className="border-blpeer-aria-checked: h-[45px] w-[272px] rounded-md border p-2"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border border-[#c7e21c] bg-[#c7e21c] px-[35px] py-2.5 hover:bg-[#eeff7e]"
        >
          <span className="font-semibold not-italic leading-[normal] text-black">
            Guardar
          </span>
        </button>
      </form>
    </div>
  );
};
