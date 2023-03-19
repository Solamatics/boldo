import Boldo from "../assets/boldo2.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:justify-center px-16 md:flex-row md:ml-[40px] mt-16">
        <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4">
          <div className="flex flex-col md:mt-4 gap-6">
            <div className="flex items-center gap-4">
              <img src={Boldo} alt="logo" />
              <h3 className="text-[#0A2640] text-[40px] font-bold">Boldo</h3>
            </div>
            <span className=" text-[#777777]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </span>
          </div>

          <div className="flex mt-4 md:mt-0 flex-col gap-6">
            <h2 className="font-bold">Landing</h2>
            <span className="text-[#777777]">Home</span>
            <span className="text-[#777777]">Prodcts</span>
            <span className="text-[#777777]">Services</span>
          </div>

          <div className="flex mt-4 md:mt-0 flex-col gap-6">
            <h2 className="font-bold">Company</h2>
            <span className="text-[#777777]">Home</span>
            <span className="text-[#777777]">
              Careers{" "}
              <span className="py-[5px] px-[20px] bg-[#65e4a3] text-[#0a2640] rounded-full text-[13px] font-bold ml-[10px]">
                Hiring
              </span>
            </span>
            <span className="text-[#777777]">Services</span>
          </div>

          <div className="flex mt-4 md:mt-0 flex-col gap-6">
            <h2 className="font-bold">Landing</h2>
            <span className="text-[#777777]">Home</span>
            <span className="text-[#777777]">Prodcts</span>
            <span className="text-[#777777]">Services</span>
          </div>
        </div>
      </div>
      <p className="mt-12 ml-28 md:ml-[100px] text-[#777777]">
        All rights reserved.
      </p>
    </>
  );
};

export default Footer;
