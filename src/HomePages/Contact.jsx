import React from "react";

const Contact = () => {
  return (
    <footer className="max-w-[1000px] text-[#737373] light-size pt-[50px] pb-[30px] w-full mx-auto px-[38px] md:w-[90%] md:px-[45px] md:pt-[70px]">
      {/* title */}
      <div className="text-[1em] cursor-pointer hover:underline">
        Questions? Contact us.
      </div>
      {/* footer links */}
      <div className="pt-[1.8rem] text-[12px]">
        {/* first row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pb-[14px] cursor-pointer hover:underline">FAQ</div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Help Center
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Account
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Media Center
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pb-[14px] cursor-pointer hover:underline">
            Investor Relations
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">Jobs</div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Ways to Watch
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Terms of Use
          </div>
        </div>
        {/* third row */}
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
          <div className="pb-[14px] cursor-pointer hover:underline">
            Contact Us
          </div>
        </div>
        {/* fourth row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pb-[14px] cursor-pointer hover:underline">
            Speed Test
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Legal Notices
          </div>
          <div className="pb-[14px] cursor-pointer hover:underline">
            Only on Netflix
          </div>
        </div>
      </div>
      {/* bottom title */}
      <div className="text-[12px] pt-[26px]">Netflix Sri Lanka</div>
    </footer>
  );
};

export default Contact;
