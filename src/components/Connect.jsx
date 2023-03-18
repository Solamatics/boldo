import AccordionTab from "./AccordionTab";
import PeopleImg from "../assets/people.svg";

const Connect = () => {
  return (
    <div className="flex justify-center p-[20px] md:p-[10px] md:px[15px] md:mx-24 md:mt-20">
      <div>
        <div>
          <img src={PeopleImg} alt="" className="w-[100%]" />
        </div>
        <div className="flex flex-col mt-5 md:grid md:gap-4 md:grid-cols-2 md:mt-10 md:grid-rows-2">
          <h3 className="md:text-3xl md:leading-[56px] md:w-[70%]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div>
            <AccordionTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
