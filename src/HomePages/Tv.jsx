import React from "react";

const Tv = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1100px] mx-auto py-[50px] md:justify-between md:pb-12 md:pt-4 md:py-0 md:gap-[60px] md:flex-row">
      {/* text section */}
      <div className="w-full text-white text-center md:text-left md:w-[50%]">
        <h1 className="regular-size text-[1.625rem] tracking-wide leading-[1.1] max-w-[640px] font-bold pb-[20px] md:text-[3.125rem]">
          Enjoy on your TV.
        </h1>
        <p className="text-[1.125rem] regular-size max-w-[640px] font-normal w-[90%] mx-auto md:w-full md:text-left md:leading-[2.25rem] md:text-[1.625rem]">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>

      {/* video section */}
      <div className="relative w-[90%] md:w-[50%] md:pb-10">
        <video
          className="absolute max-h-[55%] top-[47.8%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:top-[43.8%] md:left-[49.6%] md:max-h-[49.6%]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoPlay
          muted
          loop
        />
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          className="w-full relative"
          alt="tv"
        />
      </div>
    </div>
  );
};

export default Tv;
