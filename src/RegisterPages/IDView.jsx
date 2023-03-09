import React from "react";

const IDView = ({ onClose }) => {
  const handleOnClose = () => {
    onClose(false);
  };

  return (
    <div className="fixed inset-0 bg-white/95 flex flex-col h-screen">
      <div className="flex justify-end items-center py-5 px-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          data-uia="close-overlay"
          role="button"
          aria-label="close"
          tabindex="0"
          onClick={handleOnClose}
        >
          <path
            d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center pt-[18px] ">
        <p className="mx-auto light-size max-w-[270px] w-[245px] text-center cursor-default leading-[1.2]">
          Your card's security code (CVV) is the 3 or 4 digit number located on
          the front or back of most cards.
        </p>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/tooltip/visa_cvv_2x.png"
          className="h-[130px] w-[200px] mx-auto my-[30px]"
          alt="back"
        />
        <img
          src="	https://assets.nflxext.com/ffe/siteui/acquisition/payment/tooltip/amex_cvv_2x.png"
          className="h-[130px] w-[200px] mx-auto mb-[30px]"
          alt="front"
        />
      </div>
    </div>
  );
};

export default IDView;
