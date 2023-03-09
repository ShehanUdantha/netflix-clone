import React, { useState, useRef, useEffect } from "react";
import { Header } from "../Components/Header";
import validator from "validator";
import IDView from "./IDView";
import Footer from "../Components/Footer";
import Check from "../assets/check.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreditForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [expireDate, setExpireDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [display, setDisplay] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const [displayThree, setDisplayThree] = useState(false);
  const [displayFour, setDisplayFour] = useState(false);
  const [displayFifth, setDisplayFifth] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const firstNameField = useRef(null);
  const lastNameField = useRef(null);
  const cardNumberField = useRef(null);
  const expireDateField = useRef(null);
  const securityCodeField = useRef(null);

  const [message, setMessage] = useState("Please enter a card number.");
  const [messageTwo, setMessageTwo] = useState(
    "Please enter an expiration date."
  );
  const [messageThree, setMessageThree] = useState(
    "Please enter a security code (CVV)."
  );

  const [goto, setGoto] = useState(false);
  const navigate = useNavigate();

  const handleFirstName = (e) => {
    const value = e.target.value;

    setFirstName(value);

    if (value !== "" && value.length > 0) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  const handleLastName = (e) => {
    const value = e.target.value;

    setLastName(value);

    if (value.length === 0) {
      setDisplayTwo(false);
    } else {
      setDisplayTwo(true);
    }
  };

  const handleCardNumber = (e) => {
    const value = e.target.value;
    setCardNumber(value);

    if (value.length === 0) {
      setMessage("Please enter a card number.");
      setDisplayThree(true);
    } else if (validator.isCreditCard(value)) {
      setDisplayThree(false);
    } else {
      setMessage("Please enter a valid credit card number.");
      setDisplayThree(true);
    }
  };

  const handleExpireDate = (e) => {
    const value = e.target.value;
    setExpireDate(value);
    const regex = /^[a-zA-Z]+$/;
    if (!value.match(regex)) {
      if (value.length === 0) {
        setMessageTwo("Please enter an expiration date.");
        setDisplayFour(true);
      } else if (value.length == 2) {
        if (value < 13 && value > 0) {
          e.target.value = value + "/";
        } else {
          setDisplayFour(true);
          setMessageTwo("Expiration Month must be between 1 and 12!");
        }
      } else if (value.length === 5) {
        const sliceValue = value.split("/");
        if (sliceValue[1] <= 48 && sliceValue[1] >= 23) {
          setExpireDate(value);
          setDisplayFour(false);
        } else {
          setDisplayFour(true);
          setMessageTwo("The expiration year must be between 2023 and 2048.");
        }
      }
    } else {
      setDisplayFour(true);
    }
  };

  const handleSecurityCode = (e) => {
    const value = e.target.value;
    setSecurityCode(value);

    if (value.length === 0) {
      setMessageThree("Please enter a security code (CVV).");
      setDisplayFifth(true);
    } else if (value.length === 1) {
      setMessageThree("Please enter a valid CVV code.");
      setDisplayFifth(true);
    } else if (value.length > 2) {
      setDisplayFifth(false);
    }
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" &&
      cardNumber === 0 &&
      expireDate === "" &&
      securityCode === ""
    ) {
      setDisplay(true);
      setMessage("Please enter a card number.");
      setDisplayThree(true);
      setMessageTwo("Please enter an expiration date.");
      setDisplayFour(true);
      setMessageThree("Please enter a security code (CVV).");
      setDisplayFifth(true);
    } else if (firstName === "") {
      setDisplay(true);
    } else if (cardNumber === 0) {
      setMessage("Please enter a card number.");
      setDisplayThree(true);
    } else if (expireDate === "") {
      setMessageTwo("Please enter an expiration date.");
      setDisplayFour(true);
    } else if (securityCode === "") {
      setMessageThree("Please enter a security code (CVV).");
      setDisplayFifth(true);
    } else {
      setDisplay(false);
      setDisplayTwo(false);
      setDisplayThree(false);
      setDisplayFour(false);
      setDisplayFifth(false);

      setGoto(true);
    }
  };

  useEffect(() => {
    if (goto) {
      navigate("/moviepage");
    }
  });

  return (
    <div className="h-screen bg-white">
      {/* header section */}
      <Header btn="Sign Out" />
      <div className="border-t-[1px] border-[#e5e5e5]"></div>
      {/* body section */}
      <div className="flex justify-center items-center w-full h-[85vh] px-[32px] md:px-[60px]">
        <div className="flex flex-col items-center w-full h-full max-w-[978px] text-[#333] pt-[40px] md:pr-[5px]">
          {/* form section */}
          <div className="flex flex-col items-start justify-center w-full max-w-[450px] md:pl-[8px] md:pr-[2px]">
            {/* text area */}
            <span className="text-[12.8px] regular-size leading-[1.20rem] pt-[1px] font-medium">
              STEP 3 OF 3
            </span>
            <h1 className="regular-size tracking-wide text-start font-bold leading-[1.3] text-[1.94rem] pb-[14px] md:leading-[1.35]">
              Set up your credit or debit card
            </h1>

            {/* payment images area */}
            <div className="flex">
              <img
                src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                alt="visa"
                className="pr-[6px] w-[2.80rem] h-[1.55rem]"
              />
              <img
                src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                alt="master"
                className="pr-[6px] w-[2.84rem] h-[1.55rem]"
              />
              <img
                src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                alt="amex"
                className="pr-[6px] w-[2.80rem] h-[1.55rem]"
              />
            </div>

            {/* input field section */}
            <form className="w-[100%]" onSubmit={handleSubmit}>
              {/* first name filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[11px] ${
                  display === false && firstName === ""
                    ? "border-[#8c8c8c]"
                    : display === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="text"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    ref={firstNameField}
                    onChange={(e) => handleFirstName(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      firstName === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => firstNameField.current.focus()}
                  >
                    First name
                  </label>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  display ? "block" : "hidden"
                }`}
              >
                Please enter a first name.
              </p>

              {/* last name filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[10px] ${
                  displayTwo === false && lastName === ""
                    ? "border-[#8c8c8c]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="text"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    ref={lastNameField}
                    onChange={(e) => handleLastName(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      lastName === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => lastNameField.current.focus()}
                  >
                    Last name
                  </label>
                </div>
              </div>

              {/* card number filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[10px] ${
                  displayThree === false && cardNumber === 0
                    ? "border-[#8c8c8c]"
                    : displayThree === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="text"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    ref={cardNumberField}
                    onChange={(e) => handleCardNumber(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      cardNumber === 0
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => cardNumberField.current.focus()}
                  >
                    Card number
                  </label>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  displayThree ? "block" : "hidden"
                }`}
              >
                {message}
              </p>

              {/* expiration date filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[10px] ${
                  displayFour === false && expireDate === ""
                    ? "border-[#8c8c8c]"
                    : displayFour === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="text"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    maxLength="5"
                    ref={expireDateField}
                    onChange={(e) => handleExpireDate(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      expireDate === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => expireDateField.current.focus()}
                  >
                    Expiration date (MM/YY)
                  </label>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  displayFour ? "block" : "hidden"
                }`}
              >
                {messageTwo}
              </p>

              {/* security code filed */}
              <div
                className={`w-[100%] border rounded-sm mt-[10px] ${
                  displayFifth === false && securityCode === ""
                    ? "border-[#8c8c8c]"
                    : displayFifth === true
                    ? "border-[#b92d2b]"
                    : "border-[#5fa53f]"
                }`}
              >
                <div className="h-[58px] w-full text-[16px] font-normal light-size relative flex justify-center items-center">
                  <input
                    type="text"
                    className="h-full px-[10px] pt-[10px] text-black outline-none rounded-sm placeholder:text-[#8c8c8c] w-full"
                    placeholder=""
                    maxLength="4"
                    ref={securityCodeField}
                    onChange={(e) => handleSecurityCode(e)}
                  />
                  <label
                    className={`label-one absolute light-size font-medium tracking-wide px-[0.55rem] text-[#8c8c8c] cursor-text left-0 top-[1.2rem] ${
                      securityCode === ""
                        ? "text-[14px] md:text-[16px] "
                        : "transform -translate-y-6 text-[11px] pt-[0.6rem] md:font-bold md:text-[12px]"
                    }`}
                    onClick={() => securityCodeField.current.focus()}
                  >
                    Security code (CVV)
                  </label>

                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[9px] cursor-pointer"
                    onClick={handleModal}
                  >
                    <g fill="none">
                      <g>
                        <circle
                          stroke="#A9A6A6"
                          cx="18"
                          cy="18"
                          r="17"
                        ></circle>
                        <path
                          d="M17.051 21.094v-.54c0-.648.123-1.203.369-1.665.246-.462.741-.915 1.485-1.359a7.37 7.37 0 0 0 .981-.657c.222-.186.372-.366.45-.54.078-.174.117-.369.117-.585 0-.384-.177-.714-.531-.99-.354-.276-.831-.414-1.431-.414-.624 0-1.131.135-1.521.405-.39.27-.627.627-.711 1.071h-2.304a4.053 4.053 0 0 1 .738-1.845c.396-.546.924-.981 1.584-1.305.66-.324 1.44-.486 2.34-.486.852 0 1.596.153 2.232.459.636.306 1.134.726 1.494 1.26.36.534.54 1.143.54 1.827 0 .66-.177 1.227-.531 1.701-.354.474-.891.933-1.611 1.377-.42.252-.729.48-.927.684-.198.204-.33.399-.396.585a1.79 1.79 0 0 0-.099.603v.414h-2.268zm1.26 4.158c-.408 0-.762-.15-1.062-.45-.3-.3-.45-.654-.45-1.062 0-.408.15-.762.45-1.062.3-.3.654-.45 1.062-.45.408 0 .762.15 1.062.45.3.3.45.654.45 1.062 0 .408-.15.762-.45 1.062-.3.3-.654.45-1.062.45z"
                          fill="#A9A6A6"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              {/* warning message */}
              <p
                className={`light-size text-[12.8px] font-normal text-left text-[#b92d2b] leading-[1.4] ${
                  displayFifth ? "block" : "hidden"
                }`}
              >
                {messageThree}
              </p>

              {/* selected plan */}
              <div className="w-full bg-[#F4F4F4] h-[70px] rounded-md mt-[10px] flex justify-between items-center px-[14px]">
                <div className="">
                  <p className="regular-size font-bold text-[14.5px] md:text-[15px]">
                    USD9.99/month
                  </p>
                  <p className="light-size font-normal text-[#737373] text-[14.5px] md:text-[15px]">
                    Premium Plan
                  </p>
                </div>
                <Link to="/planform">
                  <p className="light-size font-bold text-[14.5px] text-[#0071eb] hover:underline cursor-pointer md:text-[18px]">
                    Change
                  </p>
                </Link>
              </div>

              <div className="text-[12.5px] font-normal light-size leading-[1.4] text-[#737373] mt-[25.5px]">
                <p>
                  By checking the checkbox below, you agree to our&nbsp;
                  <a
                    href=""
                    className="text-[#0071eb] hover:underline cursor-pointer"
                  >
                    Terms of Use
                  </a>
                  ,&nbsp;
                  <a
                    href=""
                    className="text-[#0071eb] hover:underline cursor-pointer"
                  >
                    Privacy Statement
                  </a>
                  , and that you are over 18. Netflix will automatically
                  continue your membership and charge the membership fee
                  (currently USD9.99/month) to your payment method until you
                  cancel. You may cancel at any time to avoid future charges.
                </p>
              </div>

              {/* checkbox section */}
              <div className="flex justify-start mt-[8px] text-[#737373] md:items-center">
                <div
                  className="h-[27px] w-[27px] bg-white border-[1px] border-[#737373] flex justify-center items-center"
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
                  I agree.
                </p>
              </div>
              {/* button section */}
              <button className="text-[24px] text-white bg-[#e50914] rounded-[4px] min-h-[65px] font-normal regular-size min-w-[110px] w-[100%] px-[2em] mt-[2rem]">
                Start MemberShip
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="border-t-[1px] border-[#e5e5e5] mt-[490px] md:mt-[458px]"></div>
      <Footer />
      {isModalOpen && <IDView onClose={setIsModalOpen} />}
    </div>
  );
};

export default CreditForm;
