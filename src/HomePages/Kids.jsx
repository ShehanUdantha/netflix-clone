import React from "react";

const Kids = () => {
  return (
    <div className="text-white overflow-hidden flex flex-col-reverse justify-center items-center text-left max-w-[1100px] mx-auto py-[50px] md:py-[4.5rem] md:flex-row md:justify-between md:gap-[34.5px]">
      {/* image section */}
      <div className="relative w-[90%] md:w-[50%]">
        <img
          src="https://occ-0-4249-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          className="w-full"
          alt="kids"
        />
      </div>
      {/* text section */}
      <div className="w-[90%] md:w-[55%]">
        <h1 className="regular-size text-[1.625rem] tracking-wide leading-[1.1] w-full font-bold pb-[20px] text-center md:text-left md:text-[3.125rem]">
          Create profiles for kids.
        </h1>
        <p className="text-[1.125rem] regular-size max-w-[530px] font-normal text-center leading-[1.2] px-5 md:px-0 md:text-left md:leading-[2.25rem] md:text-[1.625rem]">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default Kids;
