import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";

const PlanForm = () => {
  const [firstColumn, setFirstColumn] = useState(false);
  const [secondColumn, setSecondColumn] = useState(false);
  const [thirdColumn, setThirdColumn] = useState(false);
  const [fourthColumn, setFourthColumn] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const columnClick = (column) => {
    if (column === "first") {
      setFirstColumn(true);
      setSecondColumn(false);
      setThirdColumn(false);
      setFourthColumn(false);
      setSelectedPlan("mobile");
    } else if (column === "second") {
      setFirstColumn(false);
      setSecondColumn(true);
      setThirdColumn(false);
      setFourthColumn(false);
      setSelectedPlan("basic");
    } else if (column === "third") {
      setFirstColumn(false);
      setSecondColumn(false);
      setThirdColumn(true);
      setFourthColumn(false);
      setSelectedPlan("standard");
    } else if (column === "fourth") {
      setFirstColumn(false);
      setSecondColumn(false);
      setThirdColumn(false);
      setFourthColumn(true);
      setSelectedPlan("premium");
    }
  };
  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign Out" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>

      {/* body section */}
      <div className="flex justify-center items-center w-full h-auto px-[19px] cursor-default md:px-[60px]">
        <div className="flex flex-col items-start w-full h-full max-w-[978px] text-[#333] pt-[2px] md:px-[16px]">
          {/* form section */}
          <div className="w-full flex flex-col items-start justify-center">
            <div className="pt-[18px] w-full px-[13px] md:px-[16px]">
              {/* text area */}
              <span className="text-[12.8px] regular-size leading-[1.20rem] font-medium">
                STEP 2 OF 3
              </span>
              <h1 className="regular-size tracking-wide text-start font-bold pb-[10px] leading-[1.3] text-[1.94rem] pt-[3px] md:pb-[14px]">
                Choose the plan that’s right for you
              </h1>

              {/* pointed area */}
              <div className="w-full">
                <div className="flex items-start justify-start pt-[6px] md:pt-[3px]">
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
                  <p className="text-[18px] light-size font-normal text-start leading-[1.25] pt-[1px] pl-[10px]">
                    Watch all you want. Ad-free.
                  </p>
                </div>
                <div className="flex items-start justify-start pt-[6px]">
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
                  <p className="text-[18px] light-size font-normal text-start leading-[1.25] pt-[1px] pl-[10px]">
                    Recommendations just for you.
                  </p>
                </div>
                <div className="flex items-start justify-start pt-[6px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#e50914] w-[28px] md:w-[26px] h-[26px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-[18px] light-size font-normal text-start leading-[1.25] pt-[1px] pl-[10px]">
                    Change or cancel your plan anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-[120vh] mt-[20px]">
              {/* packages label section */}
              <div className="sticky top-0 bg-white w-full md:px-[16px]">
                <div className="flex justify-center h-full pt-[8px] w-full gap-[0.5rem] md:justify-end md:pr-[1px] md:h-[144px] md:gap-[2.12rem] md:pt-[12px]">
                  <div className="flex flex-col items-center w-full md:w-auto">
                    <div
                      className={`h-[75px] w-[100%] flex items-center justify-center regular-size text-white font-medium text-[12px] rounded-sm md:text-[17px] md:h-[120px] md:w-[120px] ${
                        firstColumn ? "bg-[#e50914]" : "bg-[#EF6B71]"
                      }`}
                      onClick={() => columnClick("first")}
                    >
                      Mobile
                    </div>
                    <div
                      className={`w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-[#e50914] border-r-[15px] border-r-transparent md:border-l-[10px] md:border-t-[10px] md:border-r-[10px] ${
                        firstColumn ? "block" : "hidden"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center w-full md:w-auto">
                    <div
                      className={`h-[75px] w-[100%] flex items-center justify-center regular-size text-white font-medium text-[12px] rounded-sm md:text-[17px] md:h-[120px] md:w-[120px] ${
                        secondColumn ? "bg-[#e50914]" : "bg-[#EF6B71]"
                      }`}
                      onClick={() => columnClick("second")}
                    >
                      Basic
                    </div>
                    <div
                      className={`w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-[#e50914] border-r-[15px] border-r-transparent md:border-l-[10px] md:border-t-[10px] md:border-r-[10px] ${
                        secondColumn ? "block" : "hidden"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center w-full md:w-auto">
                    <div
                      className={`h-[75px] w-[100%] flex items-center justify-center regular-size text-white font-medium text-[12px] rounded-sm md:text-[17px] md:h-[120px] md:w-[120px] ${
                        thirdColumn ? "bg-[#e50914]" : "bg-[#EF6B71]"
                      }`}
                      onClick={() => columnClick("third")}
                    >
                      Standard
                    </div>
                    <div
                      className={`w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-[#e50914] border-r-[15px] border-r-transparent md:border-l-[10px] md:border-t-[10px] md:border-r-[10px] ${
                        thirdColumn ? "block" : "hidden"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center w-full md:w-auto">
                    <div
                      className={`h-[75px] w-[100%] flex items-center justify-center regular-size text-white font-medium text-[12px] rounded-sm md:text-[17px] md:h-[120px] md:w-[120px] ${
                        fourthColumn ? "bg-[#e50914]" : "bg-[#EF6B71]"
                      }`}
                      onClick={() => columnClick("fourth")}
                    >
                      Premium
                    </div>
                    <div
                      className={`w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-[#e50914] border-r-[15px] border-r-transparent md:border-l-[10px] md:border-t-[10px] md:border-r-[10px] ${
                        fourthColumn ? "block" : "hidden"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* details section */}
              <div className="">
                {/* first row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[8px] pb-[15px] items-center justify-center md:py-[18px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Monthly price
                    </div>

                    <div className="grid grid-cols-4 w-full gap-[36px] regular-size font-bold text-[11.5px] tracking-wide pt-[10px] md:pt-0 md:gap-20 md:pl-[29px] md:pr-[20px] md:w-[64%] md:text-[15.5px]">
                      <div
                        className={`${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        USD2.99
                      </div>
                      <div
                        className={`${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        USD3.99
                      </div>

                      <div
                        className={`${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        USD7.99
                      </div>
                      <div
                        className={`${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        USD9.99
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#e5e5e5]"></div>
                {/* second row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[12px] pb-[15px] items-center justify-center md:py-[18px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Video quality
                    </div>
                    <div className="grid grid-cols-4 w-full gap-[40px] pl-[10px] regular-size font-bold text-[11.5px] tracking-wide pt-[10px] md:pt-0 md:gap-20 md:pl-[43px] md:pr-[12px] md:w-[64%] md:text-[15.5px]">
                      <div
                        className={`${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        Good
                      </div>
                      <div
                        className={`${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        Good
                      </div>
                      <div
                        className={`${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        Better
                      </div>
                      <div
                        className={`pl-[8px] ${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        Best
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#e5e5e5]"></div>
                {/* third row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[11px] pb-[15px] items-center justify-center md:py-[18px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Resolution
                    </div>
                    <div className="grid grid-cols-4 w-full gap-[38px] pl-[9px] pr-[3px] regular-size font-bold text-[11.5px] tracking-wide pt-[9px] md:pt-0 md:gap-20 md:pl-[43px] md:pr-[22px] md:w-[64%] md:text-[15.5px]">
                      <div
                        className={`${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        480p
                      </div>
                      <div
                        className={`pl-[5px] ${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        720p
                      </div>
                      <div
                        className={`pl-[3px] ${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        1080p
                      </div>
                      <div
                        className={`${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        4K+HDR
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#e5e5e5]"></div>
                {/* fourth row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[12px] pb-[4px] items-center justify-center md:pt-[10px] md:pb-[3px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Devices you can use to watch
                    </div>
                    <div className="grid grid-cols-4 w-full gap-[40px] regular-size font-semibold text-[11.5px] tracking-wide text-[#737373] pt-[11px] md:pt-[3px] md:gap-20 md:pl-[25px] md:pr-[23px] md:w-[64%] md:text-[12px]">
                      {/* first column */}
                      <div
                        className={`flex flex-col ${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Phone</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Tablet</p>
                        </div>
                      </div>
                      {/* second column */}
                      <div
                        className={`flex flex-col ${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Phone</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Tablet</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Computer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">TV</p>
                        </div>
                      </div>
                      {/* third column */}
                      <div
                        className={`flex flex-col ${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Phone</p>
                        </div>

                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Tablet</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Computer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">TV</p>
                        </div>
                      </div>
                      {/* fourth column */}
                      <div
                        className={`flex flex-col ${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Phone</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Tablet</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">Computer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pb-[12px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            className="w-[26px] h-[26px]"
                          >
                            <path
                              d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <p className="pt-[2px]">TV</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#e5e5e5]"></div>
                {/* fifth row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[10px] pb-[12px] items-center justify-center md:pt-[18px] md:pb-[16px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Spatial audio
                    </div>
                    <div className="grid grid-cols-4 w-full gap-[40px] regular-size font-bold text-[11.5px] tracking-wide text-[#737373] pt-[6px] md:pt-[3px] md:gap-20 md:pl-[25px] md:pr-[23px] md:w-[64%] md:text-[15.5px]">
                      <div
                        className={`flex justify-center ${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                        >
                          <path
                            d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={`flex justify-center ${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                        >
                          <path
                            d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={`flex justify-center ${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                        >
                          <path
                            d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={`flex justify-center ${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        <span aria-hidden="true">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                          >
                            <path
                              d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#e5e5e5]"></div>
                {/* sixth row */}
                <div className="px-[16px]">
                  <div className="flex flex-col light-size pt-[12px] pb-[12px] items-center justify-center md:pt-[18px] md:pb-[16px] md:items-start md:flex-row">
                    <div className="w-full text-[13px] text-center md:text-start md:w-[36%] md:text-[16px]">
                      Number of devices for downloads
                    </div>
                    <div className="grid grid-cols-4 w-full gap-[40px] regular-size font-bold text-[11.5px] tracking-wide text-[#737373] pt-[10px] md:pt-[3px] md:gap-20 md:pl-[25px] md:pr-[23px] md:w-[64%] md:text-[15.5px]">
                      <div
                        className={`flex justify-center ${
                          firstColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("first")}
                      >
                        1
                      </div>
                      <div
                        className={`flex justify-center ${
                          secondColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("second")}
                      >
                        1
                      </div>
                      <div
                        className={`flex justify-center ${
                          thirdColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("third")}
                      >
                        2
                      </div>
                      <div
                        className={`flex justify-center ${
                          fourthColumn ? "text-[#e50914]" : "text-[#737373]"
                        }`}
                        onClick={() => columnClick("fourth")}
                      >
                        6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* description area */}
              <div className="px-[16px] pt-[10px] md:pt-[30px]">
                <div className="text-[13px] light-size leading-[1.1] text-[#737373]">
                  <p>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                    availability subject to your internet service and device
                    capabilities. Not all content is available in all
                    resolutions. See our&nbsp;
                    <a href="" className="hover:underline text-[#0071eb]">
                      Terms of Use
                    </a>
                    &nbsp;for more details.
                  </p>
                  <p className="pt-[13px]">
                    Only people who live with you may use your account. Watch on
                    4 different devices at the same time with Premium, 2 with
                    Standard, and 1 with Basic and Mobile.
                  </p>
                </div>
              </div>

              {/* button section */}
              <div className="flex justify-center px-[16px]">
                <Link to="/paymentPicker">
                  <button className="text-[24px] text-white bg-[#e50914] rounded-[4px] min-h-[65px] font-normal regular-size min-w-[110px] w-[440px] px-[2em] mt-[1.5rem]">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[332px] md:mt-[250px]"></div>
      <Footer />
    </div>
  );
};

export default PlanForm;
