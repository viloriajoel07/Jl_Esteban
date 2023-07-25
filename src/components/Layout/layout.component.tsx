import { LegacyRef, ReactNode, useEffect, useRef, useState } from "react";
import { FloatButton } from "~components/FloatButton";
import Footer from "~components/Footer";
import { Header } from "~components/Header";
import "atropos/css";

interface Props {
  headerGradient?: boolean;
  children: ReactNode;
  spacingStartHeader?: boolean;
  sectionFreeSpace?: ReactNode;
}

const Layout = ({
  spacingStartHeader = true,
  headerGradient = false,
  sectionFreeSpace,
  children,
}: Props) => {
  const [showButton, setShowButton] = useState(false);
  const [styleHeader, setStyleHeader] = useState(false);
  const divRef = useRef() as LegacyRef<HTMLDivElement> | any;

  useEffect(() => {
    const handleScroll = () => {
      if (divRef && divRef.current) {
        const { top } = divRef.current.getBoundingClientRect();

        if (top <= -100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }

        if (top <= -150.75) {
          setStyleHeader(true);
        } else {
          setStyleHeader(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [divRef]);

  return (
    <div className="flex flex-col w-full items-center" ref={divRef}>
      <Header setStyle={headerGradient ? headerGradient : styleHeader} />
      <section className="w-full position-relative">{sectionFreeSpace}</section>
      <main
        className={`w-full min-h-screen px-7 py-10 xl:px-0 max-w-[1200px] position-relative ${
          spacingStartHeader ? "pt-24" : ""
        }`}
      >
        {children}
      </main>
      <Footer />
      <FloatButton showButton={showButton} />
    </div>
  );
};

export default Layout;
