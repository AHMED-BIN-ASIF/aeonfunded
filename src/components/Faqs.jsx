import React, { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";

const faqsData = [
  {
    question: "How much money do I get from the profit?",
    answer:
      "Users are entitled to retain 80% of the performance results achieved on their trader accounts at the end of each business period. The payout can increase up to 95% with optional add-ons, applicable to both Classic and Plus challenges, provided all account Objectives and Rules are met.",
  },
  {
    question: "Can I have more than one account on Aeon Funded?",
    answer:
      "No, you are allowed to have only one login account for accessing the dashboard and managing your profile, creating multiple login accounts is prohibited and may lead to account suspension or termination. However, when it comes to trading accounts, there is no limit on the number of accounts you can have as long as they are part of different challenge phases. You can combine Funded trading accounts to reach a maximum capital allocation of $400,000, using one or more accounts. Please make sure to follow the guidelines and terms for each challenge phase to avoid any issues.",
  },
  {
    question: "Will I Receive a Refund for My Registration Fee?",
    answer:
      "The registration fee will be refunded after the third consecutive payout from your Aeon Master Account. This adjustment ensures that dedicated traders are rewarded for their commitment and consistent performance. However, keep in mind that the registration fee remains non-refundable under any other circumstances. No refunds or replacement accounts will be provided unless the third payout milestone is reached. All fees are considered final upon registration.",
  },
  {
    question: "What platforms are available?",
    answer:
      "We offer TradeLocker and Platform 5, both designed for a smooth trading experience with fast execution and advanced tools. Choose your platform and start your challenge!",
  },
];

const Faqs = ({mode}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs"
      className="py-[120px] max-xl:py-20 max-md:py-10"
      style={{
        background: mode==='dark' ? 
        "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
        :"",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="grid grid-cols-[.65fr_1fr] gap-5 items-center
        max-lg:grid-cols-1">
          <div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
            <Eyebrow text="FAQ" />
            <h2 className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] 
            max-lg:text-4xl
            ${mode==='dark'? 'text-white': 'text-dark1f'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-sm leading-[1.71]  max-w-[344px] mt-[10px]
            ${mode==='dark'? 'text-ivoryTint': 'text-dark1f opacity-80'}`}>
              Have questions? Our FAQ section has you covered with
              quick answers to the most common inquiries.
            </p>
          </div>
          <div className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] flex flex-col gap-[10px]
          ${mode==='dark'? 'bg-black ': 'bg-[#F1F1F1]'}`}>
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-[20px] p-8 border border-solid border-[rgba(255,255,255,0.20)] flex flex-col justify-between items-start
                max-lg:p-5`}
                style={{
                  background: mode==='dark'?
                  "linear-gradient(180deg, rgba(255, 204, 0, 0.00) 0%, rgba(255, 204, 0, 0.04) 100%), rgba(0, 0, 0, 0.20)"
                  :"#fff"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center  text-left font-inter text-lg leading-none max-md:text-sm
                    ${mode==='dark' ? 'text-white' : 'text-dark1f'}`}
                >
                  <span>{faq.question}</span>
                  <span className="text-[24px] leading-[0.9] font-light ">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className={`text-sm font-inter pt-2 max-md:text-xs
                    ${mode==='dark'? 'text-ivoryTint':'text-dark1f'}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
