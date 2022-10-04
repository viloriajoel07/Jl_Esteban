import Link from "next/link";
import { FC, HtmlHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "~components/Input";

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  mode?: "dark" | "light";
}

const Header: FC<HeaderProps> = ({ mode = "light", ...props }) => {
  const [activeBar, setActiveBar] = useState(false);

  const LINKS_ROUTES = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Authentication",
      link: "/",
    },
  ];

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-10 py-4 gap-x-16 w-full mb-10">
      <div className="gap-x-2 w-full md:w-auto flex items-center justify-between md:justify-center">
        <div className="w-12 h-12 bg-blue-700 bg-opacity-70 rounded-full relative flex items-center">
          <span className="absolute right-[-120px] text-2xl font-bold">
            Shope app
          </span>
        </div>
        <ul
          className={`px-6 md:pl-32 gap-x-4 flex flex-col sm:flex-row top-0 z-30 h-screen sm:h-auto fixed sm:static w-[300px] right-[-300px] transition-all ${
            activeBar && "!right-0 bg-white p-4"
          }`}
        >
          <div className="relative sm:hidden flex justify-between items-center mb-2 py-2">
            <p className="text-2xl font-bold">Shoppe</p>
            <button
              className="block sm:hidden"
              onClick={() => setActiveBar(!activeBar)}
            >
              <Icon icon={"emojione-monotone:cross-mark"} className="w-6 h-6" />
            </button>
          </div>
          <hr />
          {LINKS_ROUTES.map(({ link, title }) => (
            <li key={title} className="w-full py-2 text-xl">
              <Link href={link}>
                <a className="text-gray-800 hover:text-black">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="block sm:hidden"
          onClick={() => setActiveBar(!activeBar)}
        >
          <Icon icon={"fa6-solid:bars"} className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-x-3">
        <button>
          <Icon icon="ei:cart" className="w-8 h-8" />
        </button>
        <button>
          <Icon icon="ei:heart" className="w-8 h-8" />
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
