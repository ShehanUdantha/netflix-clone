import React from "react";

const Download = () => {
  return (
    <div className="text-white flex flex-col-reverse justify-center items-center max-w-[1250px] py-[50px] mx-auto md:justify-between md:pt-[30px] md:pb-[50px] md:gap-[120px] md:flex-row">
      {/* image section */}
      <div className="relative w-[90%] md:w-[45%]">
        {/* big image section */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          className="w-[500px] h-auto"
          alt="download"
        />
        <div className="absolute z-2 bg-black w-[60%] border-2 flex items-center min-w-[15em] justify-between border-[#4F4F4F] rounded-xl py-[0.5rem] pb-[12px] px-[0.75rem] left-[49.2%] bottom-[7%] -translate-x-1/2 drop-shadow-2xl md:w-[64.5%]">
          <div className="flex justify-between items-center">
            {/* small image section */}
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              className="h-[3em] md:h-[4.5rem]"
              alt="poster"
            />
            {/* text message section */}
            <div className="text-left pl-4">
              <div className="regular-size font-base text-[0.9em] leading-[1.7] md:text-[1em]">
                Stranger Things
              </div>
              <div className="light-size text-[0.75em] text-[#0071eb] leading-[0.9] md:text-[0.9em]">
                Downloading...
              </div>
            </div>
          </div>
          {/* gif section */}
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            className="h-[3rem] w-[3rem]"
            alt="gif"
          />
        </div>
      </div>
      {/* text section */}
      <div className="w-[85%] text-left md:w-[55%]">
        <h1 className="regular-size text-[1.625rem] tracking-wide max-w-[550px] font-bold text-center pb-[10px] leading-[1.1] md:pb-[20px] md:text-left md:text-[3.125rem]">
          Download your shows to watch offline.
        </h1>
        <p className="text-[1.125rem] regular-size font-normal max-w-[500px] text-center leading-[1.25] md:leading-[2.25rem] md:text-left md:text-[1.625rem]">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default Download;
