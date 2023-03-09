import React from "react";
import Home from "./Home";
import Tv from "./Tv";
import Download from "./Download";
import Watch from "./Watch";
import Kids from "./Kids";
import FAQ from "./FAQ";
import Contact from "./Contact";

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
