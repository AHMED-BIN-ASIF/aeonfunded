import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "../ui/Eyebrow";
import Verified from "../assets/images/verified.svg";
import Payouts from "../assets/images/payout-img.webp";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Secure = ({ mode }) => {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      gsap.utils.toArray(".secure-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            rotate: index % 2 === 0 ? -30 : 30,
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150,
          },
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 2,
            // ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 40%",
              scrub: false,
              // toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20 max-md:py-10 overflow-hidden"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg,  rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%),  0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Secure" />
          <h2 className={`text-[50px] font-semibold tracking-[-0.5px] max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
            Instant and Secure Payouts
          </h2>
          <p className={`text-sm max-w-[644px] mx-auto mt-[10px] ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}>
            Get paid quickly and securely with a smooth and reliable payout process.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[60px] max-lg:grid-cols-1">
          <div className={`secure-card p-[10px] rounded-[24px] border border-[rgba(255,255,255,0.06)] shadow-card-inset ${mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"}`}>
            <div className={`pt-10 pb-0 px-5 text-center relative h-full rounded-[18px] border border-[rgba(255,255,255,0.10)] flex flex-col justify-between ${mode === "dark" ? "bg-card-radial" : "bg-white"}`}>
              <h4 className={`text-2xl font-semibold mt-4 mb-[10px] ${mode === "dark" ? "text-white" : "text-dark1f"}`}>Payouts Guaranteed with AEON</h4>
              <p className={`text-sm max-w-[450px] mx-auto ${mode === "dark" ? "text-white" : "text-dark1f opacity-80"}`}>
                The total amount of money paid out to traders over time, showcasing overall earnings.
              </p>
              <img src={Verified} alt="Verified payout guarantee badge" className={`mx-auto h-auto ${mode === "dark" ? "" : "filter grayscale"}`} />
            </div>
          </div>
          <div className={`secure-card p-[10px] rounded-[24px] border border-[rgba(255,255,255,0.06)] shadow-card-inset ${mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"}`}>
            <div className={`py-10 px-5 text-center relative h-full rounded-[18px] border border-[rgba(255,255,255,0.10)] flex flex-col justify-between ${mode === "dark" ? "bg-card-radial" : "bg-white"}`}>
              <h4 className={`text-2xl font-semibold mt-4 mb-[10px] ${mode === "dark" ? "text-white" : "text-dark1f"}`}>Fast Reliable Payouts</h4>
              <p className={`text-sm max-w-[420px] mx-auto ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}>
                The total amount of money paid out to traders over time, showcasing overall earnings.
              </p>
              <img src={Payouts} alt="Illustration of secure payouts" className={`mx-auto h-auto ${mode === "dark" ? "" : "filter grayscale invert"}`} />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] mt-11 items-center justify-center flex-wrap">
          <Button to="http://trading.aeonfunded.com/" target="_blank" text="Get Funded" mode={mode} />
          <Button to="http://trading.aeonfunded.com/" target="_blank" text="More Payouts" variant="gold" hasIcon={true} icon={ArrowRight} mode={mode} />
        </div>
      </div>
    </section>
  );
};

export default Secure;
