import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Header, SignIn } from "~components";
import Image from "next/image";
import image from "assets/img05.png";

interface AuthProps {
  type?: "login" | "register";
}

const Authentication: FC<AuthProps> = ({ type = "login" }) => {
  const [mode, setMode] = useState<Boolean>(type === "login" ? true : false);

  const info = {
    login: {
      message: "BIENVENIDO",
      title: "Iniciar sesión",
      link: "¿ No tienes una cuenta ?",
      href: "Registrarme",
      textButtonSubmit: "Iniciar",
    },
    register: {
      message: "¡ EMPECEMOS !",
      title: "Crear nueva cuenta",
      link: "¿ Ya tienes cuenta ?",
      href: "Iniciar sesión",
      textButtonSubmit: "Crear cuenta",
    },
  }[mode ? "login" : "register"];

  return (
    <div className="h-screen w-full flex flex-col items-center bg-zinc-900 backdrop-blur-xl">
      <Header />
      <div className="px-10 h-full flex md:flex:row items-center w-full mt-28">
        <section className="flex-grow flex justify-center items-center">
          <div className="max-w-[32rem] w-full">
            <p className="text-5xl text-white mb-2 font-bold zeyada-font text-center">
              {info.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-x-2 text-gray-600 mb-4 justify-center text-center">
              <p className="text-white/80">{info.link}</p>
              <div>
                <Button
                  className="text-sky-500 outline-none font-normal"
                  onClick={() => setMode(!mode)}
                >
                  {info.href}
                </Button>
              </div>
            </div>
            <SignIn mode={mode} buttonSubmitText={info.textButtonSubmit} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Authentication;
