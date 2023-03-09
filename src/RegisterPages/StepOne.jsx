import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";

const StepOne = () => {
  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign In" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>

      {/* body section */}
      <div className="flex justify-center items-center w-full h-[85vh] px-[32px] md:px-[60px]">
        <div className="flex flex-col items-center w-full h-full max-w-[978px] text-[#333] pt-[127px] md:pt-[134px]">
          {/* form section */}
          <div className="max-w-[340px] flex flex-col items-start justify-center md:items-center">
            {/* image section */}
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              alt="tv's"
              className="h-[62px] w-[260px]"
            />

            {/* text area */}
            <span className="text-[12.8px] regular-size leading-[1.20rem] font-medium pt-[37.5px]">
              STEP 1 OF 3
            </span>
            <h1 className="regular-size tracking-wide text-start font-bold pb-[10px] leading-[1.3] text-[1.94rem] md:pb-[14px] md:text-center">
              Finish setting up your account
            </h1>
            <span className="text-[1.125rem] light-size leading-[1.2] pt-[4px] md:pt-0">
              Netflix is personalized for you.
            </span>
            <p className="text-[1.125rem] light-size font-normal text-start leading-[1.25] pt-[2px] md:pt-[1px] md:text-center">
              Create a password to watch on any device at any time.
            </p>

            {/* button section */}
            <Link to="/regform" className="w-[100%]">
              <button className="text-[24px] text-white bg-[#e50914] rounded-[4px] min-h-[65px] font-normal regular-size min-[110px] w-[100%] px-[2em] mt-6">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[105px]"></div>
      <Footer />
    </div>
  );
};

export default StepOne;
