import {
  HtmlHTMLAttributes,
  LegacyRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Header, Card, FloatButton } from "~components";
import { mostSold } from "../data/Data";
import Footer from "~components/Footer";
import { flushSync } from "react-dom";
import { Layout } from "~components/Layout";

const MainStart = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen relative">
      <div className="flex flex-col justify-center absolute h-screen gap-8 py-8 w-full backdrop-blur-sm bg-zinc-900/40 xl:py-14">
        <h1 className="font-bold text-center text-4xl md:text-6xl px-6  text-white antont-font drop-shadow-2xl">
          ESTILOS PARA AVENTURAS AL AIRE LIBRE
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-white/10 backdrop-blur-lg border-[3px] text-white rounded-xl px-8 py-2"
            onClick={() => {}}
          >
            Ver Tendencias
          </button>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover bg-top delay-100"
      >
        <source src="/nike2.mp4" />
      </video>
    </div>
  );
};

const Home = () => {
  const [listMostSold, setMostSold] = useState(mostSold);

  return (
    <Layout spacingStartHeader={false} sectionFreeSpace={<MainStart />}>
      <div className="flex flex-col w-full py-10">
        <h2 className="text-4xl pb-6 font-bold">Tendencia</h2>
        <div className="grid-responsive w-full">
          {listMostSold.map((item) => (
            <a key={item.id} href={`product/${item.id}_mostSold`}>
              <Card item={item} key={item.id} />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
