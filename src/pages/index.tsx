import Link from "next/link";
import { FC, useState } from "react";
import { Header, SignIn } from "~components";

interface AuthProps {
  type?: "login" | "register";
}

const Authentication: FC<AuthProps> = ({ type = "login" }) => {
  const [mode, setMode] = useState<Boolean>(type === "login" ? true : false);

  const info = {
    login: {
      message: "Welcome back",
      title: "Log in",
      link: "You do not have an account ?",
      href: "Sign up",
      textButtonSubmit: "Log in",
    },
    register: {
      message: "Start for free",
      title: "Create new account",
      link: "Already a member ?",
      href: "Log in",
      textButtonSubmit: "Create account",
    },
  }[mode ? "login" : "register"];

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <Header />

      <div className="px-10 h-full flex flex-col items-center justify-center w-full md:w-[38rem]">
        <p className="text-xl text-gray-500 mb-4 font-bold">{info.message}</p>
        <div className="text-5xl font-bold flex gap-x-2 mb-5 text-center">
          <h1 className="">{info.title}</h1>
          <span className="hidden md:block text-sky-500">.</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-2 text-lg text-gray-600 mb-4">
          <p>{info.link}</p>
          <button
            className="text-sky-500 outline-none"
            onClick={() => setMode(!mode)}
          >
            {info.href}
          </button>
        </div>
        <SignIn mode={mode} buttonSubmitText={info.textButtonSubmit} />
      </div>
    </div>
  );
};

export default Authentication;
