import GraduationMonochromatic from "~/assets/svg/graduation-monochromatic.svg";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  const { data: session } = useSession();
  const goToDashboard = async () => {
    await router.push("/dashboard");
  };
  if (session?.user?.role === "user") {
    toast.error(
      "Su cuenta esta deshabilitada, contacte con el administrador para mas información",
    );
  } else if (session?.user?.role) {
    void goToDashboard();
  }
  return (
    <>
      <div className="-mt-32 flex h-screen w-full flex-row items-center justify-center overflow-hidden bg-[#F1FCFF] lg:mt-0 lg:justify-start lg:pl-[120px]">
        <div
          className="flex w-full max-w-lg flex-col items-center justify-center
          space-y-4 rounded-lg px-4 md:items-start lg:py-8 "
        >
          <div className="text-[40px] font-bold not-italic text-[#96C346] md:w-[510px] md:text-[62px] md:leading-[63px]">
            Neetwork Digital Business School
          </div>
          <div className="text-sm font-bold not-italic leading-[25px] text-[#47C7F0] md:w-[510px] md:text-base">
            100% en línea | 100% práctico | En horario flexible |
            Actualizaciones semanales | Certificación incluida | Más de
            2.400.000 alumnos | 80+ Horas!
          </div>
          <Link
            href={"/api/auth/signin"}
            className="flex h-[49px] w-[245px] shrink-0 items-center justify-center rounded-[10px] bg-[#47C7F0] text-sm font-bold not-italic leading-[63px] text-white hover:bg-[#3f8197]"
          >
            Ingresar
          </Link>
        </div>
        <Image
          src={GraduationMonochromatic}
          alt=""
          className="fixed -bottom-20 -right-10 lg:h-[648px] lg:w-[648px]"
        />
      </div>
    </>
  );
}
