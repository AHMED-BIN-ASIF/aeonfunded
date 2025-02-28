import React from "react";
import { motion } from "framer-motion";
import Star from "../assets/icons/star.svg";
import Cube from "../assets/images/cube.webp";
import Texture from "../assets/images/texture.svg";
import TextureBlack from "../assets/images/texture-black.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";

const Banner = ({ mode }) => {
  return (
    <section
      className="relative pt-[100px] pb-[100px] rounded-[0_0_40px_40px] overflow-hidden"
      style={{
        background:
          mode === "dark"
            ? "transparent"
            : "radial-gradient(165.19% 140% at 50% 10%, rgba(255, 255, 255, 0.00) 37.41%, #000 69.27%, #000 100%)",
      }}
    >
      <div className="container max-w-[1642px] relative z-[3]">
        <div className="grid grid-cols-2 items-center gap-10 max-xl:gap-7 max-lg:grid-cols-1">
          <div className="flex flex-col items-start">
            <Eyebrow
              imageSrc={Star}
              text="Rated 10/10 From 800+ Users"
              theme={`${mode === "dark" ? "golden" : "light"}`}
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className={`text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] max-xl:text-[56px] max-lg:text-4xl ${
                mode === "dark" ? "text-white" : "text-dark1f"
              }`}
            >
              Launch Your{" "}
              <span className={mode === "dark" ? "text-primary" : "text-black"}>
                Success
              </span>{" "}
              with Our Capital
            </motion.h1>
            <p
              className={`text-base m-[16px_0_32px] max-w-[513px] ${
                mode === "dark" ? "text-ivoryTint" : "text-dark1f"
              }`}
            >
              Trade with our capital, keep up to 95% of the profits, and
              maximize your earnings with zero risk to your funds!
            </p>
            <Link
              to="http://trading.aeonfunded.com"
              className={`btn text-[16px] font-inter font-medium leading-none rounded-[100px] h-10 px-8 py-4 flex items-center justify-center ${
                mode === "dark"
                  ? "bg-white shadow-nav-shadow text-black"
                  : " bg-black text-white"
              }`}
            >
              Get Funded
            </Link>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src={Cube}
              alt="cube-img"
              loading="lazy"
              className={`max-lg:mx-auto max-lg:max-h-[400px] ${
                mode === "dark" ? "" : "filter grayscale"
              }`}
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={mode === "dark" ? Texture : TextureBlack}
          alt="texture"
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      <div
        className={`absolute inset-0 w-full h-full ${
          mode === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={BannerGradient}
          alt="BannerGradient"
          loading="lazy"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Banner;
