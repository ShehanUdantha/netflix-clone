import React, { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import Check from "../assets/check.png";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [display, setDisplay] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);

  const [message, setMessage] = useState("Email is required!");
  const [messageTwo, setMessageTwo] = useState("Password is required!");

  const emailField = useRef(null);
  const passwordField = useRef(null);

  const [checkBox, setCheckBox] = useState(false);

  const [goto, setGoto] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (
      !value.includes("@gmail.com") &&
      value !== "" &&
      value.length > 0 &&
      value.length < 4
    ) {
      setMessage("Email should be between 5 and 50 characters");
      setDisplay(true);
    } else if (
      !value.includes("@gmail.com") &&
      value !== "" &&
      value.length > 4
    ) {
      setMessage("Please enter a valid email address");
      setDisplay(true);
    } else if (value.includes("@gmail.com")) {
      setDisplay(false);
    } else {
      setMessage("Email is required!");
      setDisplay(true);
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (value.length === 0) {
      setMessageTwo("Password is required!");
      setDisplayTwo(true);
    } else if (value.length < 6 || value.length > 60) {
      setMessageTwo("Your password must contain between 6 and 60 characters.");
      setDisplayTwo(true);
    } else {
      setDisplayTwo(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setMessage("Email is required!");
      setDisplay(true);
      setMessageTwo("Password is required!");
      setDisplayTwo(true);
    } else if (email === "") {
      setMessage("Email is required!");
      setDisplay(true);
    } else if (password === "") {
      setMessageTwo("Password is required!");
      setDisplayTwo(true);
    } else {
      setDisplay(false);
      setDisplayTwo(false);
      setGoto(true);
    }
  };

  useEffect(() => {
    if (goto) {
      navigate("/plan");
    }
  });

  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign In" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>

      {/* body section */}
      <div className="flex justify-center items-center w-full h-[85vh] px-[32px] md:px-[60px]">
        <div className="flex flex-col items-center w-full h-full max-w-[978px] text-[#333] pt-[2px]">
          {/* form section */}
          <div className="max-w-[440px] flex flex-col items-start justify-center">
            {/* text area */}
            <span className="text-[12.8px] regular-size leading-[1.20rem] font-medium max-w-[440px] pt-[37.5px]">
              STEP 1 OF 3
            </span>
            <h1 className="regular-size tracking-wide text-start font-bold pb-[10px] leading-[1.3] text-[1.94rem] md:pb-[14px]">
              Create a password to start your membership
            </h1>
            <span className="light-size text-[1.125rem] font-normal text-start leading-[1.25] pt-[4px] md:pt-0">
              Just a few more steps and you're done!
            </span>
            <p className="text-[1.125rem] light-size font-normal text-start leading-[1.25] pt-[10px] md:pt-[11px]">
              We hate paperwork, too.
            </p>

            <form className="w-[100%]" onSubmit={handleSubmit}>
              {/* input field section */}
              {/* email filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[15px] ${
                  display === false && email === ""
                    ? "border-[#8c8c8c]"
                    : display === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="email"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    ref={emailField}
                    onChange={(e) => handleEmail(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      email === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => emailField.current.focus()}
                  >
                    Email
                  </label>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  display ? "block" : "hidden"
                }`}
              >
                {message}
              </p>

              {/* password field */}
              <div
                className={`w-[100%] border rounded-sm mt-[10px] ${
                  displayTwo === false && password === ""
                    ? "border-[#8c8c8c]"
                    : displayTwo === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="password"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    ref={passwordField}
                    onChange={(e) => handlePassword(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      password === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => passwordField.current.focus()}
                  >
                    Add a Password
                  </label>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  displayTwo ? "block" : "hidden"
                }`}
              >
                {messageTwo}
              </p>

              {/* checkbox section */}
              <div className="flex justify-start mt-[11px] md:mt-[12px] md:items-center">
                <div
                  className="h-[27px] w-[31px] bg-white border-[1px] border-black/80 flex justify-center items-center md:w-[27px]"
                  onClick={() => setCheckBox(!checkBox)}
                >
                  <img
                    src={Check}
                    className={`h-[21px] w-[20px] mt-[5px] ${
                      checkBox ? "block" : "hidden"
                    }`}
                    alt="check"
                  />
                </div>
                <p className="light-size text-[15.5px] font-normal text-start leading-[1.35] tracking-[0.010rem] pl-[9px] pt-[4px] md:pt-0">
                  Please do not email me Netflix special offers.
                </p>
              </div>
              {/* button section */}
              <button className="text-[24px] text-white bg-[#e50914] rounded-[4px] min-h-[65px] font-normal regular-size min-w-[110px] w-[100%] px-[2em] mt-[1.7rem]">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[203px] md:mt-[90px]"></div>
      <Footer />
    </div>
  );
};

export default RegForm;
