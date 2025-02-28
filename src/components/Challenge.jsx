import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Dashboard from "../assets/images/challenge-dasboard.webp";

const Challenge = ({mode}) => {
  return (
    <section id="chalenges"
      className="py-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background: mode==='dark'
        ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
        : ""
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="grid grid-cols-[.65fr_1fr] gap-6 items-center
        max-lg:grid-cols-1">
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center ">
            <Eyebrow text="Challenge" theme="white" />
            <h2 className={`text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl ${mode==='dark'?'text-white':'text-dark1f'}`}>
              Starting Your Challennge
            </h2>
            <p className={`text-sm leading-[1.71]   mx-auto mt-[10px]
            ${mode==='dark'?'text-ivoryTint':'text-dark1f opacity-80'}`}>
            Show your trading potential with no time limit just trade at least 5 days, stay profitable, and within the drawdown limit.
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="/" text="Start Challenge" mode={mode} />
            </div>
          </div>
          <div>
            <img src={Dashboard} alt="dashboard" loading="lazy" className=" w-full -mt-20 max-xl:-mt-16 max-lg:mt-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
