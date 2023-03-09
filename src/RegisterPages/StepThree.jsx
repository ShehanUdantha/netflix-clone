import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";

const StepThree = () => {
  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign Out" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>

      {/* body section */}
      <div className="flex justify-center items-center w-full h-[85vh] px-[32px] md:px-[60px]">
        <div className="flex flex-col items-center w-full h-full max-w-[978px] text-[#333] pt-[40px]">
          {/* form section */}
          <div className="flex flex-col items-start justify-center w-full max-w-[500px] md:items-center">
            {/* image section */}
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
              alt="lock"
              className="h-[50px] w-[50px]"
            />

            {/* text area */}
            <span className="text-[12.8px] regular-size leading-[1.20rem] font-medium pt-[44px]">
              STEP 3 OF 3
            </span>
            <h1 className="regular-size tracking-wide text-start font-bold leading-[1.1] text-[1.94rem] pt-[2.8px] pb-[16px] md:text-center">
              Choose how to pay
            </h1>

            <p className="text-start text-[1.135rem] light-size leading-[1.28] w-full md:pt-0 md:w-[450px] md:text-center">
              Your payment is encrypted and you can change how you pay anytime.
            </p>
            <p className="text-start text-[1.100rem] regular-size font-bold leading-[1.25] tracking-wide pt-[10px] md:light-size md:text-center">
              Secure for peace of mind.
            </p>
            <p className="text-start text-[1.100rem] regular-size font-bold leading-[1.25] tracking-wide pt-[1px] md:light-size md:text-center">
              Cancel easily online.
            </p>

            {/* button section */}
            <div className="flex flex-col items-end w-full pt-[20px]">
              {/* encrypted message section */}
              <div className="flex items-center justify-center text-[13px] light-size pr-[2px] leading-[1.1]">
                <p>End-to-end encrypted</p>
                <svg
                  id="secure-server-icon"
                  viewBox="0 0 12 16"
                  className="h-[16px] w-16px] pl-[4px] mb-[5px]"
                >
                  <g fill="none">
                    <g fill="#FFB53F">
                      <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <Link to="/creditoption" className="w-full">
                {/* payment button */}
                <div className="text-black bg-white border-[#ccc] border-[2px] rounded-[4px] h-[90px] font-normal regular-size min-w-[110px] w-[100%] pr-[10px] pt-[1px] pl-[0.95rem] md:pl-[1em] md:h-[64px]">
                  <div className="flex justify-between items-center h-full w-full">
                    {/* image with text section */}
                    <div className="flex flex-col items-start justify-center pt-[6px] md:pt-0 md:flex-row md:items-center">
                      <p className="text-start text-[16px] light-size leading-[1.3] pr-[15px]">
                        Credit or Debit Card
                      </p>
                      {/* payment images area */}
                      <div className="flex pb-[0.10rem] pt-[4px] md:pt-0">
                        <img
                          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                          alt="visa"
                          className="pr-[6px] w-[2.80rem] h-[1.55rem]"
                        />
                        <img
                          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                          alt="master"
                          className="pr-[6px] w-[2.84rem] h-[1.55rem]"
                        />
                        <img
                          src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                          alt="amex"
                          className="pr-[6px] w-[2.80rem] h-[1.55rem]"
                        />
                      </div>
                    </div>
                    {/* arrow image section*/}
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/reg_selection/chevron_060915_2.svg"
                      alt="arrow"
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[45px] md:mt-[22px]"></div>
      <Footer />
    </div>
  );
};

export default StepThree;
