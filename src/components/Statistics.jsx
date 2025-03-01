import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Badge from "../assets/icons/medal.svg";
import Teacher from "../assets/icons/teacher.svg";
import Dimond from "../assets/icons/diamond.svg";
import Check from "../assets/icons/check mark-circle.svg";
import Globe from "../assets/icons/globe.svg";
import CountUp from "react-countup";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Statistics = ({ mode }) => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center max-xl:py-24 transition-all duration-300 ease-in-out"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  0px -173.5px / 100% 145.749% no-repeat"
            : "#fff",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Statistics" />
          <h2
            className={` text-[50px] leading-none font-semibold tracking-[-0.5px]
          max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}
          >
            Top Statistics of the Month
          </h2>
          <p
            className={`text-sm leading-[1.71]  max-w-[350px] mx-auto mt-[10px]
            ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}
          >
            Trade with our capital, keep up to 95% of the profits, and maximize your earnings with zero risk to your funds!
          </p>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-6 mt-[60px] max-w-[818px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {[
            { icon: Badge, value: 2811, label: "No. of Funded Traders" },
            { icon: Teacher, value: "4.6M", label: "Total Trades" },
          ].map((stat, index) => (
            <motion.div key={index} variants={cardVariants} initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{ y: -10 }} className={`p-[10px] rounded-[24px] border shadow-card-inset border-[rgba(255,255,255,0.06)] ${mode === "dark" ? "bg-black " : "bg-[#F1F1F1] "}`}>
              <div className={`relative p-6 h-full rounded-[18px] border flex flex-col items-center border-[rgba(255,255,255,0.10)] ${mode === "dark" ? " bg-card-gradient" : " bg-white"}`}>
                <div className={`p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] ${mode === "dark" ? "bg-[rgba(255,204,0,0.04)] shadow-icon-border" : "bg-[rgba(31,31,31,0.04)] shadow-icon-light"}`}>
                  <img src={stat.icon} alt={stat.label} loading="lazy" className={`${mode === "dark" ? "" : "filter invert"}`} />
                </div>
                <h4 className={`${mode === "dark" ? "text-white" : "text-dark1f"} text-[28px] leading-tight font-semibold font-inter`}>
                  {typeof stat.value === "number" ? <CountUp end={stat.value} duration={4} separator="," /> : stat.value}
                </h4>
                <span className={`${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"} text-sm font-inter`}>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-6 mt-6 mx-auto max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {[
            { icon: Dimond, value: 223322, label: "Total Lot Size" },
            { icon: Check, value: "GBPJPY", label: "Most Traded Pair" },
            { icon: Globe, value: 120, label: "No. of Funded Traders" },
          ].map((stat, index) => (
            <motion.div key={index} variants={cardVariants} initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{ y: -10 }} className={`p-[10px] rounded-[24px] border shadow-card-inset border-[rgba(255,255,255,0.06)] ${mode === "dark" ? "bg-black " : "bg-[#F1F1F1]"}`}>
              <div className={`relative p-6 h-full rounded-[18px] border flex flex-col items-center border-[rgba(255,255,255,0.10)]  ${mode === "dark" ? "bg-card-gradient" : " bg-white"}`}>
                <div className={`p-3 mb-4 flex items-center justify-center rounded-full w-[50px] h-[50px] ${mode === "dark" ? "bg-[rgba(255,204,0,0.04)] shadow-icon-border" : "bg-[rgba(31,31,31,0.04)] shadow-icon-light"}`}>
                  <img src={stat.icon} alt={stat.label} loading="lazy" className={`${mode === "dark" ? "" : "filter invert"}`} />
                </div>
                <h4 className={`${mode === "dark" ? "text-white" : "text-dark1f"} text-[28px] leading-tight font-semibold font-inter`}>
                  {typeof stat.value === "number" ? <CountUp end={stat.value} duration={4} separator="," /> : stat.value}+
                </h4>
                <span className={`${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"} text-sm font-inter`}>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
