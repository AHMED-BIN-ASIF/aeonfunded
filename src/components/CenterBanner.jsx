import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";

import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";

const CenterBanner = ({ mode }) => {
  // Define animation variants for the text container
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative pt-[100px] pb-[150px] rounded-[0_0_40px_40px] overflow-hidden md:min-h-[calc(100vh-100px)] flex items-center max-md:pt-12 max-md:pb-12"
      style={{
        background:
          mode === "dark"
            ? ""
            : "radial-gradient(165.19% 140% at 50% 10%, rgba(255, 255, 255, 0.00) 37.41%, #000 69.27%, #000 100%)",
      }}
    >
      <div className="container max-w-[990px] relative z-[3]">
        {/* Wrap this div with motion.div to animate its appearance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="flex flex-col items-center justify-center text-center"
        >
          <Eyebrow text="Partner Program" theme={`${mode === "dark" ? "golden" : "light"}`} />
          <h1
            className={`text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] 
            max-xl:text-[56px] max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}
          >
            Our Proud Partner Program
          </h1>
          <p
            className={`text-base m-[16px_0_32px] max-w-[613px] ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}
          >
            Help AeonFunded grow and earn up to 20% commission – There’s no limit on how much you can earn profit!
          </p>
          <Link
            to="/"
            className={`btn text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] h-10 px-8 py-4 flex items-center justify-center
                ${mode === "dark" ? "text-black bg-white" : "text-white bg-black"}`}
          >
            Start Earning Now
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Texture}
          alt="texture"
          loading="lazy"
          className={`w-full h-full ${mode === "dark" ? "" : "filter invert grayscale"}`}
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={BannerGradient}
          alt="BannerGradient"
          loading="lazy"
          className={`w-full h-full object-cover object-bottom ${mode === "dark" ? "" : "opacity-0"}`}
        />
      </div>
    </section>
  );
};

export default CenterBanner;
