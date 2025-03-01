import React from "react";
import { motion } from "framer-motion";
import Star from "../assets/icons/star.svg";
import WorkBg from "../assets/images/work-bg.webp";
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import BannerGradientBlack from "../assets/images/htw-bg.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";

const WorkBanner = ({ mode }) => {
  return (
    <section
      className="relative bg-black pt-[200px] pb-[200px] rounded-[40px] md:min-h-[calc(100vh-100px)] overflow-hidden max-md:pt-[50px]"
    >
      <div className="container max-w-[1642px]">
        <div className="grid grid-cols-2 items-center gap-10 max-xl:gap-7 max-lg:grid-cols-1">
          {/* Animated Content */}
          <motion.div
            className="flex flex-col items-start relative z-[3]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Eyebrow imageSrc={Star} text="Scale Seamlessly" theme="golden" />
            <h1 className="text-[90px] font-semibold leading-[1.12] tracking-[-1.6px] text-white max-2xl:text-7xl max-xl:text-[56px] max-lg:text-4xl">
              How it works?
            </h1>
            <p className="text-base text-[#FBF6EC] m-[16px_0_32px] max-w-[464px]">
              Systems to support your growth, helping you scale up seamlessly with aeonFunded.
            </p>
            <Link
              to="http://trading.aeonfunded.com/"
              target="_blank"
              className="btn bg-white text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] text-black h-10 px-8 py-4 flex items-center justify-center"
            >
              Get Funded
            </Link>
          </motion.div>
          {/* Image remains unchanged */}
          <div>
            <img
              src={WorkBg}
              alt="cube-img"
              loading="lazy"
              className="max-lg:mx-auto absolute inset-[auto_0_0] z-[2] max-md:h-[50%] max-md:inset-[auto_0_0_auto]"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full z-[1]">
        <img src={Texture} alt="texture" loading="lazy" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 w-full h-full z-[2]">
        <img
          src={mode === "dark" ? BannerGradient : BannerGradientBlack}
          alt="BannerGradient"
          loading="lazy"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default WorkBanner;
