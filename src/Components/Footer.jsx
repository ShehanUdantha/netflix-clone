import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] w-full text-[#737373] light-size mx-auto pt-[28px] px-[18px] md:px-[68px] md:pt-[28px]">
      {/* title */}
      <div className="text-[1em] cursor-pointer hover:underline">
        Questions? Contact us.
      </div>

      {/* footer links */}
      <div className="pt-[1.6rem] text-[12.5px] pb-[20px] md:pr-[210px]">
        {/* first row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pb-[14px] cursor-pointer hover:underline">FAQ</div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Help Center
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Netflix Shop
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Terms of Use
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pb-[14px] cursor-pointer hover:underline">
            Privacy
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Cookie Preferences
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Corporate Information
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
