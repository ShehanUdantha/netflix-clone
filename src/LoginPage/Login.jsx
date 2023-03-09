import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const [message, setMessage] = useState(
    "Please enter a valid email or phone number."
  );
  const [messageTwo, setMessageTwo] = useState(
    "Your password must contain between 4 and 60 characters."
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleEmail = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (!value.includes("@gmail.com") && value !== "" && value.length > 4) {
      setMessage("Please enter a valid email address");
      setDisplay(true);
    } else if (value.includes("@gmail.com")) {
      setDisplay(false);
    } else {
      setMessage("Please enter a valid email or phone number.");
      setDisplay(true);
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (value.length < 4 || value.length > 60) {
      setMessageTwo("Your password must contain between 4 and 60 characters.");
      setDisplayTwo(true);
    } else {
      setDisplayTwo(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setMessage("Please enter a valid email or phone number.");
      setDisplay(true);
      setMessageTwo("Your password must contain between 4 and 60 characters.");
      setDisplayTwo(true);
    } else if (email === "") {
      setMessage("Please enter a valid email or phone number.");
      setDisplay(true);
    } else if (password === "") {
      setMessageTwo("Your password must contain between 4 and 60 characters.");
      setDisplayTwo(true);
    } else {
      setDisplay(false);
      setDisplayTwo(false);
    }
    console.log(email);
    console.log(password);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    // setIsFocused(false);
  };

  return (
    <div className="bg-left bg-cover overflow-clip h-auto bg-no-repeat bg-black md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/02c43a2e-5743-4edf-baff-13ddd74e468f/LK-en-20230227-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 h-auto md:h-[1047px]"></div>

      {/* navbar */}
      <div className="flex justify-start items-center w-full relative z-1 px-[5.5px] pt-[20px] md:pt-[24px] md:px-[40px]">
        <Link to="/">
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            className="text-[#e50914] fill-current h-[20px] pl-[0.38rem] md:h-[45px] md:pl-0"
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
        </Link>
      </div>

      {/* sign in form */}
      <div className="flex justify-center items-center pt-[22px] relative z-1">
        <div className="bg-[rgba(0,0,0,.75)] min-w-[380px] w-[450px] rounded-[4px] px-[21px] pb-[130px] min-h-[533px] md:pb-[40px] md:pt-[55px] md:px-[68px] md:min-h-[670px]">
          {/* main title */}
          <h1 className="text-[32px] text-white mb-[25px] font-medium bold-size">
            Sign In
          </h1>
          {/* form section */}
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            {/* email input field section */}
            <div className="w-full">
              <div className="h-[50px] w-full text-[16px] font-normal light-size relative">
                <input
                  type="email"
                  className={`h-full w-full px-[20px] pt-[15px] bg-[#333] text-white outline-none rounded-[4px] placeholder:text-[#8c8c8c] ${
                    display ? "border-b-2 border-[#e87c03]" : ""
                  }`}
                  placeholder=""
                  ref={emailField}
                  onChange={(e) => handleEmail(e)}
                />

                <label
                  className={`label-two absolute light-size font-medium tracking-wide left-0 top-[0.88rem] pl-[1.2rem] text-[#8c8c8c] cursor-text ${
                    email === ""
                      ? "text-[14px] md:text-[15.5px] "
                      : "transform -translate-y-6 pt-[1rem] text-[11px]"
                  }`}
                  onClick={() => emailField.current.focus()}
                >
                  Email or phone number
                </label>
              </div>
              {/* warning message */}
              <div className="w-[80%] pt-[3px] px-[2.5px] md:pt-[1.8px]">
                <p
                  className={`light-size text-[12px] font-normal text-left pt-[3.5px] text-[#e87c03] leading-[1.4] ${
                    display ? "block" : "hidden"
                  }`}
                >
                  {message}
                </p>
              </div>
            </div>

            {/* password input field section */}
            <div className="w-full mt-[14px]">
              <div
                className={`h-[50px] w-full bg-[#333] text-[16px] rounded-[4px] font-normal light-size relative flex justify-between items-center ${
                  displayTwo ? "border-b-2 border-[#e87c03]" : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="h-full w-[81%] pl-[20px] pt-[15px] bg-[#333] text-white outline-none rounded-l-[4px] placeholder:text-[#8c8c8c]"
                  placeholder=""
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  ref={passwordField}
                  onChange={(e) => handlePassword(e)}
                />

                <label
                  className={`label-two absolute light-size font-medium tracking-wide left-0 top-[0.88rem] pl-[1.2rem] text-[#8c8c8c] cursor-text ${
                    password === ""
                      ? "text-[14px] md:text-[15.5px]"
                      : "transform -translate-y-6 pt-[1rem] text-[11px]"
                  }`}
                  onClick={() => passwordField.current.focus()}
                >
                  Password
                </label>

                <button
                  className={`display-span light-size text-[14px] font-medium tracking-wide top-[0.88rem] right-0 pr-[0.80rem] text-[#8c8c8c] ${
                    isFocused ? "block" : "hidden"
                  }`}
                  onClick={handleShowPassword}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
              {/* warning message */}
              <div className="w-[80%] pt-[3px] px-[2.5px] md:pt-[1.8px]">
                <p
                  className={`light-size text-[12px] font-normal text-left pt-[3.5px] text-[#e87c03] leading-[1.4] ${
                    displayTwo ? "block" : "hidden"
                  }`}
                >
                  {messageTwo}
                </p>
              </div>
            </div>

            {/* button section */}
            <button
              className="bg-[#e50914] text-[1rem] regular-size w-full h-[50px] text-white rounded-[4px] mt-[38px]"
              type="submit"
            >
              Sign In
            </button>

            {/* remember me and help section */}
            <div className="flex justify-between items-center w-full mt-[12px] text-[13px] text-[#b3b3b3]">
              <div className="flex justify-start items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 focus:ring-0 focus:accent-[#f3f3f3] accent-[#737373]"
                />
                <p className="px-[4px] regular-size">Remember me</p>
              </div>
              <div className="hover:underline cursor-pointer">Need help?</div>
            </div>
          </form>

          {/* sign up section */}
          <div className="light-size text-[15.8px] mt-[20px] md:mt-[80px]">
            <span className="text-[#737373]">
              New to Netflix?
              <span className="text-white hover:underline cursor-pointer pl-1">
                Sign up now.
              </span>
            </span>
          </div>

          {/* learn more section */}
          <div className="text-[#8c8c8c] text-[13px] mt-[10px] leading-[1.3]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="hover:underline text-[#0071eb] pl-1 cursor-pointer">
              Learn more.
            </span>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-[#e5e5e5] md:hidden"></div>

      {/* footer section */}
      <div className="bg-[rgba(0,0,0,.75)] w-full text-[#737373] light-size mx-auto pt-[28px] pb-[20px] px-[18px] relative z-1 md:px-[175px] md:pt-[28px] md:mt-[90px]">
        {/* title */}
        <div className="text-[1em] cursor-pointer hover:underline">
          Questions? Contact us.
        </div>

        {/* footer links */}
        <div className="pt-[1.8rem] text-[12.5px] pb-[30px]">
          {/* first row */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="pb-[14px] cursor-pointer hover:underline">FAQ</div>
            <div className="pb-[14px] cursor-pointer hover:underline">
              Help Center
            </div>
            <div className="pb-[14px] cursor-pointer hover:underline">
              Terms of Use
            </div>
            <div className="pb-[14px] cursor-pointer hover:underline">
              Privacy
            </div>
          </div>
          {/* second row */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="pb-[14px] cursor-pointer hover:underline">
              Cookie Preferences
            </div>
            <div className="pb-[14px] cursor-pointer hover:underline">
              Corporate Information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
