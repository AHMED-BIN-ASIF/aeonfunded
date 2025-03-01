import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Eduicon from "../assets/icons/commision.svg";

const Educational = ({ mode }) => {
  // Container variant to stagger children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Adjust the delay between children
      },
    },
  };

  // Variant for each child element
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        {/* Wrap the grid container with motion.div for staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="grid grid-cols-[.9fr_1fr] gap-20 items-center max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1"
        >
          {/* Left Column */}
          <motion.div
            variants={childVariants}
            className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
          >
            <Eyebrow text="Educational" theme={mode === "dark" ? "white" : "light"} />
            <h2
              className={`text-[50px] leading-tight font-semibold tracking-[-0.5px]
            max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}
            >
              Learn Why We're 
              The Best
            </h2>
            <p
              className={`text-sm leading-[1.71] mx-auto mt-[10px]
              ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}
            >
              Join elite traders in our advanced funding program. Prove yours skills, access substantial capital, and trade with confidence..
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="/" text="Start Now" mode={mode} />
            </div>
          </motion.div>
          {/* Right Column */}
          <motion.div
            variants={childVariants}
            className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
              mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
            }`}
          >
            <div
              className={`relative h-full p-8 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-8 ${
                mode === "dark" ? "bg-card-radial" : "bg-white"
              }`}
              style={{ backdropFilter: "blur(7.5px)" }}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-center">
                  20% Commision
                </h3>
                <p
                  className={`text-sm leading-[1.71] max-w-[384px] mx-auto text-center ${
                    mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
                  }`}
                >
                  We want our partners to be successful as well as our traders! That’s why we pay up to 20% commissions!
                </p>
              </div>
              <div
                className={`flex items-center justify-center p-8 rounded-[20px] border border-[rgba(255,204,0,0.10)] min-h-[192px] ${
                  mode === "dark"
                    ? "bg-[rgba(0,0,0,0.40)] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)]"
                    : "bg-[#F1F1F1]"
                }`}
              >
                <div
                  className={`p-3 flex items-center justify-center rounded-full w-[90px] h-[90px] ${
                    mode === "dark"
                      ? "shadow-icon-border bg-[rgba(255,204,0,0.04)]"
                      : "shadow-icon-light bg-[rgba(31,31,31,0.04)]"
                  }`}
                >
                  <img
                    src={Eduicon}
                    alt="edu"
                    loading="lazy"
                    className={`${mode === "dark" ? "" : "filter invert grayscale"}`}
                  />
                </div>
              </div>
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Educational;
