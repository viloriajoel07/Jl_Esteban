import Link from "next/link";
import { FC, HtmlHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "~components/Input";
import { useRouter } from "next/router";

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  mode?: "dark" | "light";
  setStyle?: boolean;
}

const Header: FC<HeaderProps> = ({ mode = "light", setStyle, ...props }) => {
  const [activeBar, setActiveBar] = useState(false);
  const { pathname } = useRouter();

  const LINKS_ROUTES = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Camisas & Hoddies",
      link: "/camisas",
    },
    {
      title: "Pantalones",
      link: "/pantalones",
    },
    {
      title: "Zapatos",
      link: "/zapatos",
    },
    {
      title: "Accesorios",
      link: "/accesorios",
    },
    {
      title: "Bolsos",
      link: "/bolsos",
    },
    {
      title: "Iniciar sesión",
      link: "/auth",
    },
  ];

  return (
    <header
      className={`flex flex-col md:flex-row items-center justify-center px-7  py-4 gap-x-16 fixed md:absolute w-full bg-transparent z-40 " ${
        setStyle || activeBar
          ? "bg-gradient-to-r from-zinc-800 to-black/70 delay-100"
          : ""
      } `}
    >
      <div className="max-w-[1200px] flex justify-between w-full">
        <div
          className={`gap-x-2 w-full md:w-auto flex items-center justify-between  md:justify-center ${
            pathname === "/auth" && "flex-grow !justify-center"
          }`}
        >
          <a
            className={`flex gap-2 pt-2 text-4xl text-center font-bold justify-center items-center text-white zeyada-font ${
              pathname === "/auth" && "flex-grow pt-8 w-full"
            }`}
            href={"/"}
          >
            EsSential
          </a>

          {pathname !== "/auth" && (
            <ul
              className={`px-6 gap-x-4 flex flex-col md:flex-row top-0 z-30 h-screen md:h-auto fixed md:static w-full md:w-auto right-full transition-all ${
                activeBar && "!right-0 bg-zinc-800/[70%] backdrop-blur-2xl p-4"
              }`}
            >
              <div className="relative md:hidden flex justify-between items-center mb-2 py-2">
                <p className="text-4xl pt-3 font-bold zeyada-font text-white">
                  EsSential
                </p>
                <button
                  className="block md:hidden text-white"
                  onClick={() => setActiveBar(!activeBar)}
                >
                  <Icon
                    icon={"emojione-monotone:cross-mark"}
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <hr />
              <div className="flex md:hidden pt-2 mb-4">
                <button>
                  <Icon icon="ei:cart" width={38} className="text-white" />
                </button>
                <button>
                  <Icon icon="ei:heart" width={38} className="text-white" />
                </button>
              </div>

              {LINKS_ROUTES.map(({ link, title }) => (
                <li
                  key={title}
                  className="w-full mt-4 md:mt-0 md:w-auto flex z-50"
                >
                  <Link href={link}>
                    <a
                      className={`text-zinc-400 ${
                        pathname === link
                          ? "!text-white font-medium"
                          : "md:text-zinc-400"
                      } text-lg md:text-sm`}
                      onClick={() => setActiveBar(false)}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {pathname !== "/auth" && (
            <button
              className="block md:hidden"
              onClick={() => setActiveBar(!activeBar)}
            >
              <Icon icon={"fa6-solid:bars"} className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
        {pathname !== "/auth" && (
          <div className="hidden md:flex gap-x-3">
            <button>
              <Icon icon="ei:cart" className="w-8 h-8 text-white" />
            </button>
            <button>
              <Icon icon="ei:heart" className="w-8 h-8 text-white" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
