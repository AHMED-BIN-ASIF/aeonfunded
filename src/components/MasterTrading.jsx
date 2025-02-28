import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import CountUp from "react-countup";
import ProgressBar from "@ramonak/react-progress-bar";

const MasterTrading = ({mode}) => {
  return (
    <section
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background: mode==='dark'
        ?"radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
        :""
      }}
    >
      <div className="container max-w-[1240px]">
        <div
          className="grid grid-cols-[.9fr_1fr] gap-20 items-center
        max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1"
        >
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center ">
            <Eyebrow text="Professional Trading Platform" theme={mode==='dark'? 'white':'light'}  />
            <h2
              className={`text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl ${mode==='dark'?'text-white':'text-dark1f'}`}
            >
              Master Trading & Get Funded
            </h2>
            <p className={`text-sm leading-[1.71] mx-auto mt-[10px]
              ${mode==='dark'?'text-ivoryTint':'text-dark1f opacity-80'}`}>
              Join elite traders in our advanced funding program. Prove yiyrs
              skills, access substantial capital, and trade with confidence..
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="/" text="Start Trading" mode={mode} />
            </div>
          </div>
          <div
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset 
              ${mode==='dark' ? 'bg-black':'bg-[#F1F1F1]'}`}
          >
            <div
              className={`relative h-full p-8 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-8
                ${mode==='dark'?'bg-card-radial':'bg-white'}`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className="flex items-center justify-between w-full  font-inter">
                <h3 className="text-2xl font-semibold">Trading Challenge</h3>
                <span className={`text-[12px] font-bold relative h-8 max-w-max flex items-center justify-center 
                gap-2 rounded-[100px] py-[14px] px-5 border-solid border border-[rgba(255,204,0,0.10)] 
                 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]
                ${mode==='dark'?'bg-[rgba(255,204,0,0.10)] text-[#fc0]':'bg-[rgba(31,31,31,0.10)] text-dark1f'}`}>
                  Success
                </span>
              </div>
              <div className={` font-inter`}>
                <span className={`opacity-60 text-sm
                ${mode==='dark'?'text-ivoryTint':'text-dark1f'}`}>
                  Current Progress
                </span>
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-[28px] leading-tight font-semibold`}>
                    $
                    <CountUp end={"27000"} duration={4} separator="," />
                  </span>
                  <span className={`text-[28px] leading-tight font-semibold`}>
                    80%
                    <span className={`opacity-60 text-sm font-normal ms-1
                    ${mode==='dark'?'text-ivoryTint':'text-dark1f'}`}>
                      Complete
                    </span>
                  </span>
                </div>
                <ProgressBar
                    completed={80}
                    className={` rounded-[100px] ${mode==='dark'?'bg-[rgba(255,255,255,0.10)]':'bg-[rgba(31,31,31,0.10)]'}`}
                    barContainerClassName=" rounded-[100px] h-[10px] mt-2.5"
                    completedClassName={`w-[70%] h-[10px] rounded-[100px] ${mode==='dark'?'bg-[#fc0] ':'bg-dark1f'}`}
                    labelClassName="hidden"
                    transitionDuration="2s"
                    animateOnRender={true}
                    />
              </div>
              <div className="grid grid-cols-2 gap-2.5 font-inter max-md:grid-cols-1">
                <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)]
                  ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`opacity-60 text-sm mb-4 block
                  ${mode==='dark'?'text-ivoryTint':'text-dark1f'}`}>
                  Current Progress
                </span>
                <span className={`text-[20px] leading-tight font-semibold`}>
                    $
                    <CountUp end={"1850"} duration={4} separator="," />
                  </span>
                  <ProgressBar
                    completed={60}
                    className={` rounded-[100px] ${mode==='dark'?'bg-[rgba(255,255,255,0.10)]':'bg-[rgba(31,31,31,0.10)]'}`}
                    barContainerClassName=" rounded-[100px] h-[6px] mt-2.5"
                    completedClassName={`w-[60%] h-[6px] rounded-[100px] ${mode==='dark'?'bg-[#fc0] ':'bg-dark1f'}`}
                    labelClassName="hidden"
                    transitionDuration="2s"
                    animateOnRender={true}
                    />
                </div>
                <div className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)]
                  ${mode==='dark'?'bg-[rgba(5,5,5,0.40)]':'bg-[#F1F1F1]'}`}>
                <span className={`opacity-60 text-sm mb-4 block ${mode==='dark'?'text-ivoryTint':'text-dark1f'}`}>
                Total Drawdown
                </span>
                <span className={`text-[20px] leading-tight font-semibold`}>
                    $
                    <CountUp end={"8150"} duration={4} separator="," />
                  </span>
                  <ProgressBar
                    completed={60}
                    className={` rounded-[100px] ${mode==='dark'?'bg-[rgba(255,255,255,0.10)]':'bg-[rgba(31,31,31,0.10)]'}`}
                    barContainerClassName=" rounded-[100px] h-[6px] mt-2.5"
                    completedClassName={`w-[60%] h-[6px] rounded-[100px] ${mode==='dark'?'bg-[#fc0] ':'bg-dark1f'}`}
                    labelClassName="hidden"
                    transitionDuration="2s"
                    animateOnRender={true}
                    />
                </div>
              </div>
              <div className={`absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line ${mode==='dark'?'':'opacity-0'}`}></div>
                <div className={`absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line ${mode==='dark'?'':'opacity-0'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterTrading;
