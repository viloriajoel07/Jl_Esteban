import Link from "next/link";
import { FC, HtmlHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "~components/Input";

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  mode?: "dark" | "light";
  setStyle?: boolean;
}

const Header: FC<HeaderProps> = ({ mode = "light", setStyle, ...props }) => {
  const [activeBar, setActiveBar] = useState(false);

  const LINKS_ROUTES = [
    {
      title: "Home",
      link: "/products",
    },
    // {
    //   title: "Authentication",
    //   link: "/",
    // },
  ];

  return (
    <header
      className={`flex flex-col md:flex-row items-center justify-between px-10 py-4 gap-x-16 w-full fixed z-40 " ${
        setStyle
          ? "bg-gradient-to-r from-zinc-800 to-black/70 backdrop-blur-lg delay-100"
          : ""
      } `}
    >
      <div className="gap-x-2 w-full md:w-auto flex items-center justify-between md:justify-center">
        <a
          className="flex items-center gap-2 text-2xl font-bold text-white"
          href={"/products"}
        >
          Shope app
        </a>
        <ul
          className={`px-6 gap-x-4 flex flex-col md:flex-row top-0 z-30 h-screen md:h-auto fixed md:static w-[300px] right-[-300px] transition-all ${
            activeBar && "!right-0 bg-white p-4"
          }`}
        >
          <div className="relative md:hidden flex justify-between items-center mb-2 py-2">
            <p className="text-2xl font-bold">Shoppe</p>
            <button
              className="block md:hidden"
              onClick={() => setActiveBar(!activeBar)}
            >
              <Icon icon={"emojione-monotone:cross-mark"} className="w-6 h-6" />
            </button>
          </div>
          <hr />

          <div className="flex md:hidden mt-2">
            <button>
              <Icon icon="ei:cart" className="w-8 h-8 text-black" />
            </button>
            <button>
              <Icon icon="ei:heart" className="w-8 h-8 text-black" />
            </button>
          </div>
          {LINKS_ROUTES.map(({ link, title }) => (
            <li key={title} className="w-full md:w-auto py-2 text-xl">
              <Link href={link}>
                <a className="  text-black md:text-gray-100">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="block md:hidden"
          onClick={() => setActiveBar(!activeBar)}
        >
          <Icon icon={"fa6-solid:bars"} className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="hidden md:flex gap-x-3">
        <button>
          <Icon icon="ei:cart" className="w-8 h-8 text-white" />
        </button>
        <button>
          <Icon icon="ei:heart" className="w-8 h-8 text-white" />
        </button>

        <form className="pl-4">
          <Input
            mode="Fill"
            placeholder="Search to item"
            icon="ei:search"
            classContain=""
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
