import { useState } from "react";
import Logo from "../assets/boldo.svg";
import HeroFrame1 from "../assets/frame-1.svg";
import HeroFrame2 from "../assets/frame-2.svg";
import HeroFrame3 from "../assets/frame.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Carousel from "./Slider";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#0A2640] h-screen">
      <div className="flex justify-between items-center text-white h-24 max-w-[1240px] mx-auto px-4 bg-[#0A2640]">
        <img src={Logo} alt="logo" className="mr-4" />
        <h1 className="w-full text-3xl font-bold text-white font-manrope">
          Boldo
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">Product</li>
          <li className="p-4">Services</li>
          <li className="p-4">About</li>
          <li className="p-4">Login</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu className="text-white" size={20} />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0A2640] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="m-8 h-5 w-5" />
            <h1 className="w-full text-1xl font-bold text-white font-manrope">
              Boldo
            </h1>
          </div>

          <ul className="uppercase p-4 font-manrope">
            <li className="p-4 border-b border-gray-600">Product</li>
            <li className="p-4 border-b border-gray-600">Services</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Login</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between flex-col items-center gap-4 text-white max-w-[1240px] px-4 mx-auto md:mt-24 md:flex-row">
        <div className="w-1/2 min-w-[100%] md:min-w-[50%]">
          <p className="text-2xl font-normal md:text-5xl md:leading-[4.2rem]">
            Save time by building fast with Boldo Template{" "}
          </p>
          <h3 className="text-base md:leading-7 mt-3">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </h3>
          <div className="flex gap-6 mt-6">
            <button className="bg-[#69E6A6] text-[#0A2640] py-1 px-12 text-xs font-semibold md:py-3 md:px-8 rounded-[30px]">
              Buy template
            </button>
            <button className="bg-transparent border-solid py-1 px-12 text-xs border-2 border-white-700 text-white font-semibold md:py-3 md:px-10 rounded-[30px]">
              Explore
            </button>
          </div>
        </div>
        <div>
          <div className="w-full md:w-auto">
            <img src={HeroFrame1} alt="" />
          </div>
          <div className="flex flex-row gap-2 mt-3 w-full md:w-auto">
            <div className="w-full md:w-1/2">
              <img src={HeroFrame3} alt="" className="md:min-w-[100%]" />
            </div>

            <div className="w-full md:w-1/2">
              <img src={HeroFrame3} alt="" className="md:min-w-[100%]" />
            </div>
          </div>
        </div>
      </div>


{/*fix slider later*/}
      {/* <div
        className="mt-10 text-white flex flex-col items-center justify-center"
        v
      >
        <Carousel />
      </div> */}
    </div>
  );
};

export default Navbar;
