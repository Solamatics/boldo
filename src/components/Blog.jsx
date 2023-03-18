import Blog1 from "../assets/blog1.svg";
import Blog2 from "../assets/blog2.svg";
import Blog3 from "../assets/blog3.svg";
import Bing from "../assets/bing.svg";
import Green from "../assets/green.svg";
import Monica from "../assets/monica.svg";

import { BsArrowRightShort } from "react-icons/bs";

const features = [
  {
    name: "Chandler Bing",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    image: Blog1,
    person: Bing,
  },
  {
    name: "Rachel Green",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    image: Blog2,
    person: Green,
  },
  {
    name: "Monica Geller",
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    image: Blog3,
    person: Monica,
  },
];

const Blog = () => {
  return (
    <>
      <div className="flex justify-center md:mt-4  px-4">
        <div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-center text-sm md:text-xl font-open text-[#777777]">
              Our Blog
            </h2>
            <div className="text-center">
              <h2 className="md:mx-56 font-normal md:leading-[4.3rem] font-manrope mt-3 text-2xl md:text-5xl">
                Value proposition accelerator product management venture
              </h2>
            </div>
          </div>

          <div className="flex justify-center items-center md:px-20 flex-col md:gap-36 md:flex-row mt-10">
            {features.map((feature, index) => {
              const { content, image, name, person } = feature;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="mt-3">
                    <img src={image} alt="title" className="w-full" />
                    <h3 className="font-open text-base md:mt-3 text-[#0A2640]">
                      Category{" "}
                      <span className="text-[#777777]">November 22, 2021</span>
                    </h3>
                    <h4 className="text-[14px] mt-1 md:mt-3 text-[#777777] md:text-base md:w-9/12">
                      {content}
                    </h4>
                    <div className="flex items-center text-[#0A2640] mt-4 font-bold gap-4">
                      <div>
                        <img src={person} alt={name} />
                      </div>
                      <p>{name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-16 py-6 text-[#0A2640] font-semibold border-solid border-2 border-[#0A2640] rounded-full">
          Load More
        </button>
      </div>
    </>
  );
};

export default Blog;
