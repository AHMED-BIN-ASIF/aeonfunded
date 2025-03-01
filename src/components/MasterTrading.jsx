import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import CountUp from "react-countup";

const MasterTrading = ({ mode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="grid grid-cols-[.9fr_1fr] gap-20 items-center max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
          >
            <Eyebrow
              text="Professional Trading Platform"
              theme={mode === "dark" ? "white" : "light"}
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl ${
                mode === "dark" ? "text-white" : "text-dark1f"
              }`}
            >
              Master Trading & Get Funded
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-sm leading-[1.71] mx-auto mt-[10px] ${
                mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
              }`}
            >
              Join elite traders in our advanced funding program. Prove your skills,
              access substantial capital, and trade with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-[10px] mt-8 max-lg:justify-center"
            >
              <Button to="http://trading.aeonfunded.com/" text="Start Trading" mode={mode} target="_blank" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
              mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
            }`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`relative h-full p-8 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-8 ${
                mode === "dark" ? "bg-card-radial" : "bg-white"
              }`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className="flex items-center justify-between w-full font-inter">
                <h3 className="text-2xl font-semibold">Trading Challenge</h3>
                <span
                  className={`text-[12px] font-bold relative h-8 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-[14px] px-5 border-solid border border-[rgba(255,204,0,0.10)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset] ${
                    mode === "dark"
                      ? "bg-[rgba(255,204,0,0.10)] text-[#fc0]"
                      : "bg-[rgba(31,31,31,0.10)] text-dark1f"
                  }`}
                >
                  Success
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-inter"
              >
                <span
                  className={`opacity-60 text-sm ${
                    mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                  }`}
                >
                  Current Progress
                </span>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[28px] leading-tight font-semibold">
                    $
                    {inView ? (
                      <CountUp start={0} end={27000} duration={4} separator="," />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className="text-[28px] leading-tight font-semibold">
                    80%
                    <span
                      className={`opacity-60 text-sm font-normal ms-1 ${
                        mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                      }`}
                    >
                      Complete
                    </span>
                  </span>
                </div>
                {/* Main Animated Progress Bar */}
                <div
                  className={`rounded-[100px] ${
                    mode === "dark"
                      ? "bg-[rgba(255,255,255,0.10)]"
                      : "bg-[rgba(31,31,31,0.10)]"
                  } h-[10px] mt-2.5`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? "70%" : "0%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className={`h-full rounded-[100px] ${
                      mode === "dark" ? "bg-[#fc0]" : "bg-dark1f"
                    }`}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-2.5 font-inter max-md:grid-cols-1"
              >
                <div
                  className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
                    mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
                  }`}
                >
                  <span
                    className={`opacity-60 text-sm mb-4 block ${
                      mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                    }`}
                  >
                    Current Progress
                  </span>
                  <span className={`text-[20px] leading-tight font-semibold`}>
                    $
                    {inView ? (
                      <CountUp start={0} end={1850} duration={4} separator="," />
                    ) : (
                      "0"
                    )}
                  </span>
                  {/* Secondary Animated Progress Bar */}
                  <div
                    className={`rounded-[100px] ${
                      mode === "dark"
                        ? "bg-[rgba(255,255,255,0.10)]"
                        : "bg-[rgba(31,31,31,0.10)]"
                    } h-[6px] mt-2.5`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: inView ? "60%" : "0%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className={`h-full rounded-[100px] ${
                        mode === "dark" ? "bg-[#fc0]" : "bg-dark1f"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
                    mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
                  }`}
                >
                  <span
                    className={`opacity-60 text-sm mb-4 block ${
                      mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                    }`}
                  >
                    Total Drawdown
                  </span>
                  <span className={`text-[20px] leading-tight font-semibold`}>
                    $
                    {inView ? (
                      <CountUp start={0} end={8150} duration={4} separator="," />
                    ) : (
                      "0"
                    )}
                  </span>
                  {/* Secondary Animated Progress Bar */}
                  <div
                    className={`rounded-[100px] ${
                      mode === "dark"
                        ? "bg-[rgba(255,255,255,0.10)]"
                        : "bg-[rgba(31,31,31,0.10)]"
                    } h-[6px] mt-2.5`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: inView ? "60%" : "0%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className={`h-full rounded-[100px] ${
                        mode === "dark" ? "bg-[#fc0]" : "bg-dark1f"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
              <div
                className={`absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-card-line ${
                  mode === "dark" ? "" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-card-line ${
                  mode === "dark" ? "" : "opacity-0"
                }`}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MasterTrading;
