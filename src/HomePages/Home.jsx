import React from "react";
import { Link } from "react-router-dom";
import Email from "../Components/Email";

const Home = () => {
  return (
    <div className="h-[71.1vh] bg-cover bg-center md:h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/69ef5b3c-4981-45b5-af3b-6c5fcce57887/LK-en-20230220-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] overflow-x-hidden">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90 h-[71.2vh] md:h-screen"></div>

      {/* navbar */}
      <div className="flex justify-between items-center w-full relative z-1 pt-[28px] px-[20px] md:px-[56.5px]">
        <svg
          viewBox="0 0 111 30"
          data-uia="netflix-logo"
          className="text-[#e50914] fill-current h-[24px] pl-[0.38rem] md:h-[36px] md:pl-0"
          aria-hidden="true"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>

        <Link to="/login">
          <div className="light-size bg-[#e50914] text-white px-[0.4rem] py-[0.13rem] rounded-[3px] text-[16px] font-normal leading-normal md:px-[17px] md:py-[5px]">
            Sign In
          </div>
        </Link>
      </div>

      {/* main text */}
      <div className="relative z-1 text-white flex flex-col justify-center items-center text-center w-full h-[62vh] px-5 max-w-[800px] mx-auto gap-3 md:h-[89.5vh]">
        <h1 className="regular-size text-[1.75rem] tracking-wide leading-[1.1] max-w-[640px] font-bold pt-[30px] md:text-[3.125rem]">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-[1.125rem] regular-size max-w-[640px] font-normal pt-[4.8px] md:pb-[13.5px] md:text-[1.625rem]">
          Plans now start at USD2.99/month.
        </p>
        <p className="text-[18px] light-size tracking-[0.010rem] max-w-[640px] font-medium leading-[1.3] mx-auto md:text-[1.2rem] md:pb-[5px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* email enter section */}
        <Email />
      </div>
    </div>
  );
};

export default Home;
