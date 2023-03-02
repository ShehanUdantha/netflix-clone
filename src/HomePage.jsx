import React from "react";
import Home from "./HomePages/Home";
import Tv from "./HomePages/Tv";
import Download from "./HomePages/Download";
import Watch from "./HomePages/Watch";
import Kids from "./HomePages/Kids";
import FAQ from "./HomePages/FAQ";
import Contact from "./HomePages/Contact";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Home />
      <div className="border-t-[8px] border-[#222]"></div>
      <Tv />
      <div className="border-t-[8px] border-[#222]"></div>
      <Download />
      <div className="border-t-[8px] border-[#222]"></div>
      <Watch />
      <div className="border-t-[8px] border-[#222]"></div>
      <Kids />
      <div className="border-t-[8px] border-[#222]"></div>
      <FAQ />
      <div className="border-t-[8px] border-[#222]"></div>
      <Contact />
    </div>
  );
};

export default HomePage;
