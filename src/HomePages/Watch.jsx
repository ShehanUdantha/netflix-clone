import React from "react";

const Watch = () => {
  return (
    <div className="flex justify-center items-center max-w-[1100px] py-[50px] mx-auto md:justify-start md:py-12">
      {/* text section */}
      <div className="w-[90%] text-white md:w-[50%]">
        <h1 className="regular-size text-[1.625rem] tracking-wide leading-[1.1] max-w-[640px] font-bold pb-[20px] text-center md:text-left md:text-[3.125rem]">
          Watch everywhere.
        </h1>
        <p className="text-[1.125rem] regular-size max-w-[640px] font-normal leading-[1.25] text-center md:text-left md:leading-[2.25rem] md:text-[1.625rem]">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
    </div>
  );
};

export default Watch;
