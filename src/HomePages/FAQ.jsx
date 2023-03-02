import React, { useState } from "react";
import Email from "../Components/Email";

const FAQ = () => {
  const detailsList = [
    {
      question: "What is Netflix?",
      answerOne:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      answerTwo:
        "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answerOne:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, no contracts.",
      answerTwo: "",
    },
    {
      question: "Where can I watch?",
      answerOne:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      answerTwo:
        "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answerOne:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      answerTwo: "",
    },
    {
      question: "What can I watch on Netflix?",
      answerOne:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      answerTwo: "",
    },
    {
      question: "Is Netflix good for Kids?",
      answerOne:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      answerTwo:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggleAnswer = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-[1100px] py-[50px] mx-auto text-white md:py-0 overflow-x-hidden">
      {/* title */}
      <h1 className="regular-size text-[1.625rem] tracking-wide leading-[1.1] font-bold text-center px-10 pb-6 md:pt-[71px] md:pb-[54px] md:text-[3.125rem]">
        Frequently Asked Questions
      </h1>
      <ul className="w-full mx-auto md:w-[75%]">
        {detailsList.map((item, id) => {
          return (
            <li
              className="mb-[0.55rem] cursor-pointer"
              onClick={() => toggleAnswer(id)}
              key={"faq-" + id}
            >
              {/* question section */}
              <div className="flex justify-between w-full bg-[#303030] py-3 px-5 items-center mb-[0.1rem] md:px-8 md:py-5">
                <div className="text-[1.125rem] regular-size tracking-wide md:text-[1.625rem]">
                  {item.question}
                </div>
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  className={`w-[1.2rem] h-[1.2rem] text-white fill-current md:w-6 md:h-6 ${
                    selected === id ? "rotate-0" : "rotate-45"
                  }`}
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </div>
              {/* answer section */}
              <div
                className={`w-full bg-[#303030] py-8 px-8 items-center mb-[0.55rem] ${
                  selected === id ? "block" : "hidden"
                }`}
              >
                <div className="text-[1.125rem] regular-size leading-[1.3] tracking-[0.020rem] max-w-[750px] md:text-[1.625rem]">
                  {item.answerOne}
                </div>
                <div className="text-[1.125rem] regular-size leading-[1.3] pt-[30px] max-w-[750px] md:text-[1.625rem]">
                  {item.answerTwo}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* email enter section */}
      <p className="text-[18px] w-[90%] light-size tracking-[0.010rem] max-w-[640px] pb-[12px] font-medium pt-[20px] text-center leading-[1.3] mx-auto md:pb-[20px] md:w-full md:text-[1.2rem] md:pt-[60px]">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Email />
      <div className="md:pb-[78px]"></div>
    </div>
  );
};

export default FAQ;
