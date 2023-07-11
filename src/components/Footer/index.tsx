import { Icon } from "@iconify/react";
import { Input } from "~components/Input";

const Footer = () => {
  return (
    <footer className="h-auto md:h-72 bg-gradient-to-r from-zinc-800 to-black/80 mt-24 flex flex-col gap-8 relative items-center md:justify-center px-10">
      <div className="w-full flex flex-col md:flex-row flex-grow md:items-center pt-6 gap-8">
        <section className="flex flex-1 md:justify-center items-center">
          <div className="hover:[&>ul>li]:scale-110 hover:[&>ul>li]:transition-all hover:[&>ul>li]:cursor-pointer">
            <h2 className="text-white text-4xl mb-4">Networks</h2>
            <ul className="flex gap-4">
              <li className="">
                <Icon icon="logos:facebook" width={32} />
              </li>
              <li>
                <Icon icon="skill-icons:instagram" width={32} />
              </li>
              <li>
                <Icon icon="skill-icons:twitter" width={32} />
              </li>
              <li className="flex items-center">
                <Icon icon="logos:youtube-icon" width={40} />
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-8 flex-1">
          <div>
            <h2 className="text-white text-4xl mb-4">Products</h2>
            <ul className="text-white [&>li>a]:text-lg [&>li>a]:text-gray-300 hover:[&>li>a]:text-white hover:[&>li>a]:underline">
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Sport shirts</a>
              </li>
              <li>
                <a href="#">Pants</a>
              </li>
              <li>
                <a href="#">Caps</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-4xl mb-4">Help</h2>
            <ul className="text-white [&>li>a]:text-lg [&>li>a]:text-gray-300 hover:[&>li>a]:text-white hover:[&>li>a]:underline">
              <li>
                <a href="#">Buy product</a>
              </li>
              <li>
                <a href="#">Problem resolution</a>
              </li>
              <li>
                <a href="#">Security center</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-4xl mb-4">Support</h2>
            <ul className="text-white [&>li>a]:text-lg [&>li>a]:text-gray-300 hover:[&>li>a]:text-white hover:[&>li>a]:underline">
              <li>
                <a href="#">brand Information</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <span className="text-white py-2">© Untitled UI. All right reserved</span>
    </footer>
  );
};

export default Footer;
