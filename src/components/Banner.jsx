import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Star from "../assets/icons/star.svg";
import Cube from "../assets/images/cube.webp";
import Texture from "../assets/images/texture.svg";
import TextureBlack from "../assets/images/texture-black.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";

const Banner = ({ mode }) => {
  const cubeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(cubeRef.current, {
      y: "-20px",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="relative pt-[100px] pb-[100px] rounded-[0_0_40px_40px] overflow-hidden max-md:pt-12"
      style={{
        background:
          mode === "dark"
            ? "transparent"
            : "radial-gradient(165.19% 140% at 50% 10%, rgba(255, 255, 255, 0.00) 37.41%, #000 69.27%, #000 100%)",
      }}
    >
      <div className="container max-w-[1642px] relative z-[3]">
        <div className="grid grid-cols-2 items-center gap-10 max-xl:gap-7 max-lg:grid-cols-1">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <Eyebrow
              imageSrc={Star}
              text="Rated 10/10 From 800+ Users"
              theme={`${mode === "dark" ? "golden" : "light"}`}
            />
            <h1
              className={`text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] max-xl:text-[56px] max-lg:text-4xl ${
                mode === "dark" ? "text-white" : "text-dark1f"
              }`}
            >
              Launch Your
              {" "}
              <span className={mode === "dark" ? "text-primary" : "text-black"}>
                Success
              </span>
              {" "}
              with Our Capital
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className={`text-base m-[16px_0_32px] max-w-[513px] ${
                mode === "dark" ? "text-ivoryTint" : "text-dark1f"
              }`}
            >
              Trade with our capital, keep up to 95% of the profits, and
              maximize your earnings with zero risk to your funds!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <Button
                to="http://trading.aeonfunded.com"
                text="Get Funded"
                mode={mode}
              />
            </motion.div>
          </motion.div>
          <div ref={cubeRef}>
            <img
              src={Cube}
              alt="cube-img"
              loading="lazy"
              className={`max-lg:mx-auto max-lg:max-h-[400px] ${
                mode === "dark" ? "" : "filter grayscale"
              }`}
            />
          </div>
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
