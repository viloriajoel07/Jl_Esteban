import {
  HtmlHTMLAttributes,
  LegacyRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Header, Card } from "~components";
import Data from "../../data/Data";
import Footer from "~components/Footer";
import { flushSync } from "react-dom";

const Home = () => {
  const [listShoes, setListShoes] = useState(Data.items);
  const [styleHeader, setStyleHeader] = useState(false);
  const divRef = useRef() as LegacyRef<HTMLDivElement> | any;

  useEffect(() => {
    const handleScroll = () => {
      if (divRef && divRef.current) {
        const { top } = divRef.current.getBoundingClientRect();

        console.log(top);

        if (top <= 88.75) {
          setStyleHeader(true);
        } else {
          setStyleHeader(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [divRef]);

  return (
    <div className="flex flex-col">
      <Header setStyle={styleHeader} />
      <div className="w-full flex justify-center h-screen relative">
        <div className="flex flex-col justify-center absolute top-[40%] md:top-[35%] gap-8 py-8">
          <h1 className="font-bold text-center text-4xl md:text-8xl px-6  text-white antont-font drop-shadow-2xl">
            ESTILOS PARA AVENTURAS AL AIRE LIBRE
          </h1>
          <div className="flex justify-center">
            <button
              className="bg-white/10 backdrop-blur-lg border-[3px] text-white rounded-xl px-8 md:px-16 md:text-xl py-2 md:py-4"
              onClick={() => {}}
            >
              Comprar
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
      <div className="flex flex-col w-full" ref={divRef}>
        <h2 className="px-10 text-4xl pb-6 mt-28 font-bold">All products</h2>
        <div className="grid-responsive w-full px-10">
          {listShoes.map((item) => (
            <a key={item.id} href={`products/detail/${item.id}`}>
              <Card item={item} key={item.id} />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
