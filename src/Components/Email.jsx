import React, { useState, useRef } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("Email is required!");
  const emailField = useRef(null);

  const handleEmail = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (!value.includes("@gmail.com") && value !== "" && value.length > 4) {
      setMessage("Please enter a valid email address");
      setDisplay(true);
    } else if (value.includes("@gmail.com")) {
      setDisplay(false);
    } else {
      setMessage("Email is required!");
      setDisplay(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Email is required!");
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    console.log(email);
  };
  return (
    <div className="overflow-x-hidden">
      <form
        className="flex flex-col justify-center items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        {/* input field section */}
        <div className="h-[48px] min-w-[450px] text-[16px] font-normal light-size relative flex justify-center items-center md:h-[60px]">
          <input
            type="email"
            className={`h-full w-[75%] px-[10px] pt-[10px]  text-black outline-none rounded-l-sm rounded-r-sm placeholder:text-[#8c8c8c] md:w-full md:rounded-r-none ${
              display ? "border-b-2 border-[#ffa00a]" : ""
            }`}
            placeholder=""
            ref={emailField}
            onChange={(e) => handleEmail(e)}
          />
          <label
            className={`label-one absolute light-size font-medium tracking-wide left-[3.5rem] top-[1.2rem] px-[0.55rem] text-[#8c8c8c] cursor-text md:left-0 ${
              email === ""
                ? "text-[14px] md:text-[16px] "
                : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
            }`}
            onClick={() => emailField.current.focus()}
          >
            Email address
          </label>
        </div>
        {/* warning message */}
        <div className="block md:hidden w-[73%]">
          <p
            className={`light-size text-[15px] font-normal text-left pt-[3.5px] text-[#ffa00a] ${
              display ? "block" : "hidden"
            }`}
          >
            {message}
          </p>
        </div>
        {/* button section */}
        <button
          className="bg-[#e50914] text-[1rem] regular-size w-[29%] h-[40px] flex items-center justify-center rounded-l-sm rounded-r-sm mt-[0.84rem] md:mt-0 md:text-[1.625rem] md:h-[60px] md:w-[100%] md:px-[26px] md:rounded-l-none md:rounded-r-none"
          type="submit"
        >
          <div className="flex items-center">
            Get Started
            <svg
              className="w-3 h-3 text-white fill-current ml-[8px] md:w-5 md:h-5"
              viewBox="0 0 6 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>chevron</desc>
              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
            </svg>
          </div>
        </button>
      </form>
      {/* warning message */}
      <div className="hidden md:block">
        <p
          className={`light-size text-[14.5px] font-normal text-left pt-[3px] text-[#ffa00a] px-[2px] ${
            display ? "block" : "hidden"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Email;
