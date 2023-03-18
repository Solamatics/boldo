import Eclipse from "../assets/eclipse.svg";

const Contact = () => {
  return (
    <div className="flex justify-center mt-[80px]">
      <div className="flex justify-center max-w-[300px] h-auto md:w-[1200px] md:h-[380px] relative py-40 bg-[#0A2640] mx-[80px] px-24">
        <div className="">
          <div className="absolute top-0 right-0 w-auto h-auto md:h-300px] md:w-[700px]">
            <img src={Eclipse} alr="" className="w-[100%] z-[-1]" />
          </div>
          <div className="absolute right-1/4">
            <h3 className="text-[#fff] text-center text-[48px] leading-[72px]">
              An enterprise template to ramp up your company website
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
