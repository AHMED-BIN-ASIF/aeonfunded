import React, { useEffect } from 'react';
import gsap from 'gsap';
import Skill from '../assets/icons/wave.svg';
import JoinBg from '../assets/images/join-bg.svg';
import DiscordBg from '../assets/images/discord-bg.svg';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';

const JoinDiscord = ({ mode }) => {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.to(".radial-circle", {
        y: "+=30",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });
      gsap.to(".radial-circle-mid", {
        y: "-=30",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      className="py-[120px] max-xl:py-20 transition-all duration-200 ease-in-out"
      style={{
        background:
          mode === "dark" ? `url(${DiscordBg}) no-repeat center / cover` : "transparent",
      }}
    >
      <div className="container max-w-[1004px]">
        <div
          className="relative min-h-[768px] flex items-center justify-center
        max-lg:min-h-[500px] max-md:min-h-[350px] max-md:items-start"
        >
          <div className="text-center flex items-center flex-col relative z-[4]">
            <img
              src={Skill}
              alt="skill"
              loading="lazy"
              className={`p-[2px] rounded-[6px] w-8 h-8 mb-4 bg-primary ${
                mode === "dark" ? "" : " filter invert grayscale"
              }`}
            />
            <Eyebrow text="Discord" />
            <h2
              className={` text-[50px] leading-none font-semibold tracking-[-0.5px]
                max-lg:text-4xl max-md:text-2xl
                ${mode === "dark" ? "text-white" : "text-dark1f"}`}
            >
              Make Waves In Trading
            </h2>
            <p
              className={`text-sm leading-[1.71] max-w-[644px] mx-auto mt-[10px] mb-[32px] max-lg:mb-6 max-md:text-xs
                  ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}
            >
              Your journey starts here with growth and success.
            </p>
            <Button text="Join our Discord Community" mode={mode} />
          </div>

          {/* bg radial  */}
          {/* firstCircle   */}
          <div
            className={`radial-circle absolute top-0 left-0 rounded-full h-[708px] w-[70%] max-w-[708px] opacity-20
            max-lg:h-[450px] max-md:h-[300px] max-lg:w-[90%] max-md:hidden
            ${mode === "dark" ? "shadow-darkRadial bg-[#0D0A17] " : "shadow-lightRadial bg-white"}`}
          ></div>
          {/* second circle  */}
          <div
            className={`radial-circle-mid absolute z-[3] top-[100px] left-0 right-0 mx-auto rounded-full h-[666px] w-[70%] max-w-[666px] opacity-100
            ${mode === "dark" ? "shadow-darkRadial bg-black " : "shadow-lightRadial bg-white"}
            max-lg:h-[500px] max-lg:top-10 max-md:hidden max-md:h-[250px] max-lg:w-[70%]`}
          ></div>
          {/* firstCircle   */}
          <div
            className={`radial-circle absolute top-0 right-0 rounded-full h-[708px] w-[70%] max-w-[708px] opacity-20
            ${mode === "dark" ? "shadow-darkRadial bg-[#0D0A17] " : "shadow-lightRadial bg-white"}
            max-lg:h-[450px] max-md:h-[300px] max-lg:w-[90%] max-md:hidden`}
          ></div>
          {/* img  */}
          <div
            className={`absolute inset-0 z-0 hidden max-md:block  ${
              mode === "dark" ? "opacity-100" : "opacity-0 max-md:opacity-100 filter grayscale invert"
            }`}
          >
            <img src={JoinBg} alt="join bg" loading="lazy" className="w-full " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscord;
