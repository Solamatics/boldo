import Eclipse from "../assets/eclipse.svg";

const Contact = () => {
  return (
    <div className="flex justify-center mt-[80px]">
      <div className="flex justify-center w-[300px] h-auto md:w-[1200px] md:h-[380px] relative py-16 md:py-40 bg-[#0A2640] mx-[80px] px-24 rounded-xl">
        <div className="">
          <div className="absolute top-0 right-0 w-auto h-auto md:h-[300px] md:w-[850px]">
            <img src={Eclipse} alr="" className="w-[100%] z-[-1]" />
          </div>
          <div className="relative right-0 md:absolute md:right-1/4">
            <h3 className="text-[#fff] w-[300px] md:w-[716px] text-center text-[20px] md:text-[48px] md:leading-[72px]">
              An enterprise template to ramp up your company website
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
