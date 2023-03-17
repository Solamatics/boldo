import Man1 from "../assets/man1.svg";
import Man2 from "../assets/man2.svg";
import Man3 from "../assets/man3.svg";
import Connect from "../assets/connect.svg";
import CheckIcon from "../assets/check.svg";
import LadyIcon from "../assets/lady.svg";
import Star from "../assets/star.svg";
import EyeIcon from "../assets/eye.svg";
import SunIcon from "../assets/sun.svg";
import { BsArrowRightShort } from "react-icons/bs";

const features = [
  {
    title: "Cool feature title",
    content: "Learning curve network effects return on investment",
    image: Man1,
  },
  {
    title: "Even cooler feature",
    content: "Learning curve network effects return on investment",
    image: Man2,
  },
  {
    title: "Cool feature title",
    content: "Learning curve network effects return on investment",
    image: Man3,
  },
];

const Services = () => {
  return (
    <div className="flex justify-center mt-8 px-4">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-center text-sm md:text-xl font-open text-[#777777]">
            Our Services
          </h2>
          <div className="text-center">
            <h2 className="md:mx-56 font-normal md:leading-[4.3rem] font-manrope mt-3 text-2xl md:text-5xl">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col md:gap-36 md:flex-row mt-10">
          {features.map((feature, index) => {
            const { title, content, image } = feature;
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="mt-3">
                  <img src={image} alt="title" className="w-full" />
                  <h3 className="font-open text-[20px] md:mt-3  md:text-2xl text-[#000000]">
                    {title}
                  </h3>
                  <h4 className="text-[14px] mt-1 md:mt-3 text-[#777777] md:w-9/12">
                    {content}
                  </h4>
                  <div className="flex items-center text-[#0A2640] font-bold gap-2 underline">
                    <p>Explore page</p> <BsArrowRightShort />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center mt-20 items-center md:grid md:gap-4 md:grid-cols-2 md:grid-flow-row md:mt-20 md:mx-32">
          <div>
            <img src={Connect} alt="" />
          </div>
          <div>
            <div className="md:mb-24">
              <div>
                <h3 className="text-[#000000] md:w-[80%]  md:text-[36px] md:leading-[56px]">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h3>
              </div>

              <div className="mt-4 md:mb-12">
                <p className="flex items-align gap-4 text-[14px] md:text-[20px] mb-4">
                  <span>
                    <img
                      src={CheckIcon}
                      alt="check"
                      className="w-[20px] h-[20px]"
                    />
                  </span>{" "}
                  We connect our customers with the best.
                </p>
                <p className="flex items-aling gap-4 text-[14px] md:text-[20px] mb-4">
                  <span>
                    <img
                      src={CheckIcon}
                      alt="check"
                      className="w-[20px] h-[20px]"
                    />
                  </span>{" "}
                  Advisor success customer launch party.
                </p>
                <p className="flex items-aling gap-4 text-[14px] md:text-[20px] mb-4">
                  <span>
                    <img
                      src={CheckIcon}
                      alt="check"
                      className="w-[20px] h-[20px]"
                    />
                  </span>{" "}
                  Business-to-consumer long tail.
                </p>
              </div>

              <button className="bg-[#0A2640] text-white py-4 md:py-6 px-12 rounded-full">
                Start now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-10 items-center md:grid md:gap-4 md:grid-cols-2 md:grid-flow-row md:mt-20 md:mx-32">
          <div>
            <div className="mb-12 md:mb-28">
              <div className="mb-14">
                <h3 className="text-[#000000] md:w-[80%]  md:text-[36px] md:leading-[56px]">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h3>
              </div>

              <div className="mt-4 md:mb-12">
                <div className="flex justify-between gap-[4rem] md:gap-0 items-center bg-[#0A2640] shadow-lg rounded-xl text-white md:mr-14 py-10 md:py-7 px-5 md:px-9 mb-8">
                  <div>
                    <img src={Star} alt="staricon" />
                  </div>
                  <div>
                    <h3 className="font-open text-[12px] md:text-lg">
                      We connect our customers with the best.
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-[4rem] md:gap-0  bg-[#fff] shadow-lg rounded-xl text-[#000000] md:mr-14 py-10 md:py-7 px-5 md:px-9 mb-8">
                  <div>
                    <img src={EyeIcon} alt="staricon" />
                  </div>
                  <div>
                    <h3 className="font-open text-[12px] md:text-lg">
                      Advisor success customer launch party.
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-[4rem] md:gap-0  bg-[#fff] shadow-lg rounded-xl text-[#000000] md:mr-14 py-10 md:py-7 px-5 md:px-9 mb-8">
                  <div>
                    <img src={SunIcon} alt="staricon" />
                  </div>
                  <div>
                    <h3 className="font-open text-[12px] md:text-lg">
                      Business-to-consumer long tail.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={LadyIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
