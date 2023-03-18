import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Albus from "../assets/albus.svg";
import Snape from "../assets/snape.svg";
import Harry from "../assets/harry.svg";

const customerDetail = [
  {
    name: "Albus Dumbledore",
    detail:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    title: "Manager @ Howarts",
    imageTitle: Albus,
  },
  {
    name: "Severus Snape",
    detail:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    title: "Manager @ Slytherin",
    imageTitle: Snape,
  },
  {
    name: "Harry Potter",
    detail:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    title: "Team Leader @ Gryffindor",
    imageTitle: Harry,
  },
];

const Company = () => {
  return (
    <div className="bg-[#0A2640] px-[40px] md:px-[80px] py-10 md:py-20">
      <div className="flex flex-col justify-center items-center md:px-[60px] md:flex-row md:gap-24">
        <div className="">
          <h3 className="text-[#ffffff] md:text-[48px] md:leading-[72px] font-normal md:w-[55%]">
            An enterprise template to ramp up your company website
          </h3>
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-[#fff] p-4 rounded-full">
            <AiOutlineArrowLeft size={20} />
          </div>
          <div className="bg-[#fff] p-4 rounded-full">
            <AiOutlineArrowRight size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 md:px-[60px] gap-4 mt-10">
        {customerDetail.map((customer, index) => (
          <div className="bg-[#fff] px-4 py-14 rounded-xl" key={index}>
            <p>{customer.detail}</p>
            <div className="flex items-center gap-8 mt-10">
              <img src={customer.imageTitle} alt={customer.name} />
              <div>
                <p>{customer.name}</p>
                <p>{customer.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
