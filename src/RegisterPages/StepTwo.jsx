import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";

const StepTwo = () => {
  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign Out" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>

      {/* body section */}
      <div className="flex justify-center items-center w-full h-[85vh] px-[32px] md:px-[60px]">
        <div className="flex flex-col items-center w-full h-full max-w-[978px] text-[#333] pt-[113px] md:pt-[120px]">
          {/* form section */}
          <div className="flex flex-col items-start justify-center w-full max-w-[340px] md:items-center">
            {/* image section */}
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
              alt="true"
              className="h-[50px] w-[50px]"
            />

            {/* text area */}
            <span className="text-[12.8px] regular-size leading-[1.20rem] font-medium pt-[23.5px]">
              STEP 2 OF 3
            </span>
            <h1 className="regular-size tracking-wide text-start font-bold pb-[10px] leading-[1.3] text-[1.94rem] md:pb-[14px] md:text-center">
              Choose your plan.
            </h1>

            <div className="pt-[18px] md:pt-[15px] w-full md:px-[20px]">
              <div className="flex items-start justify-start">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#e50914] w-[26px] h-[26px]"
                  aria-hidden="true"
                >
                  <path
                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-[18px] light-size font-normal text-start leading-[1.25] max-w-[270px] pt-[1px] pl-[10px]">
                  No commitments, cancel anytime.
                </p>
              </div>
              <div className="flex items-start justify-start pt-[20px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#e50914] w-[26px] h-[26px]"
                  aria-hidden="true"
                >
                  <path
                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-[18px] light-size font-normal max-w-[270px] text-start leading-[1.25] pt-[1px] pl-[10px]">
                  Everything on Netflix for one low price.
                </p>
              </div>
              <div className="flex items-start justify-start pt-[20px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#e50914] w-[26px] h-[26px]"
                  aria-hidden="true"
                >
                  <path
                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-[18px] light-size font-normal max-w-[270px] text-start leading-[1.25] pt-[1px] pl-[10px]">
                  No ads and no extra fees. Ever.
                </p>
              </div>
            </div>

            {/* button section */}
            <Link to="/planform" className="w-full pt-[20px]">
              <button className="text-[24px] text-white bg-[#e50914] rounded-[4px] min-h-[65px] font-normal regular-size min-w-[110px] w-[100%] px-[2em] mt-6">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[153px]"></div>
      <Footer />
    </div>
  );
};

export default StepTwo;
