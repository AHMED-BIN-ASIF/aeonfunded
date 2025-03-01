import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "../ui/Eyebrow";
import BenifitBg from "../assets/images/benifit-bg.svg";
import Verified from "../assets/icons/shield-warning.png";
import Easy from "../assets/icons/hart-arrow-up.png";
import Clock from "../assets/icons/clock-circle.png";
import Capita from "../assets/icons/chart-icon.svg";
import Wallet from "../assets/icons/wallet.svg";
import Infinity from "../assets/icons/infinity.svg";

gsap.registerPlugin(ScrollTrigger);

const benifitsCards = [
  {
    icon: Verified,
    title: "Payout Guarantee",
    shortTitle: "Get Paid in 48 Hours or We Pay 100% Profit Split",
    description: "Our commitment to timely payouts sets us apart in the industry.",
    link: "/",
  },
  {
    icon: Easy,
    title: "Easy To Achieve",
    shortTitle: "5-10% Profit Targets",
    description: "Realistic and achievable profit targets designed for consistent growth.",
  },
  {
    icon: Clock,
    title: "Fast Bi-Weekly Payouts",
    shortTitle: "Upgrade to First Payout in 7 Days",
    description: "Regular payouts to keep your trading momentum going.",
  },
  {
    icon: Capita,
    title: "Scaled Capital",
    shortTitle: "Up To $2M In Scaled Capital",
    description: "Grow your trading capacity with our scaling program.",
  },
  {
    icon: Wallet,
    title: "Generous Profit Split",
    shortTitle: "Up to 95% Profit Split",
    description: "Industry-leading profit-sharing structure with maximum returns and transparency.",
  },
  {
    icon: Infinity,
    title: "Trade Without Pressure",
    shortTitle: "No Time Limits on Challenges",
    description: "Take your time to prove your trading skills. Unlike other prop firms.",
  },
];

const Benifits = ({ mode }) => {
  const cardsRef = useRef([]);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardsRef);
  
    return () => ctx.revert();
  }, []);
  
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center max-xl:py-24"
      style={{
        background:
          mode === "dark" ? `url(${BenifitBg}) no-repeat center / cover` : "",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex items-center flex-col">
          <Eyebrow text="Benefit" />
          <h2
            className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Why Traders Love <span><span className={`${mode === "dark" ? "text-primary" : "text-dark1f"}`}>A</span>EON?</span>
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[350px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
            }`}
          >
            Get paid quickly and securely with a smooth and reliable payout process.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[60px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {benifitsCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
                mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
              }`}
            >
              <div
                className={`relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start ${
                  mode === "dark" ? "bg-card-gradient" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <div
                      className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] ${
                        mode === "dark"
                          ? "shadow-icon-border bg-[rgba(255,204,0,0.04)]"
                          : "shadow-icon-light bg-[rgba(31,31,31,0.04)]"
                      }`}
                    >
                      <img src={card.icon} alt={card.title} className={`${mode === "dark" ? "" : "filter invert"}`} />
                    </div>
                    <h4 className={`text-xl leading-tight font-semibold font-inter ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
                      {card.title}
                    </h4>
                  </div>
                  <span className={`text-sm leading-loose font-inter mb-1 ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
                    {card.shortTitle}
                  </span>
                  <p className={`text-xs leading-[1.7] font-inter ${mode === "dark" ? "text-ivoryTint" : "text-dark1f"}`}>
                    {card.description}
                  </p>
                </div>
                <div className={`absolute top-[-1px] right-0 left-0 w-[80%] mx-auto h-[1px] bg-card-line ${mode === "dark" ? "" : "opacity-0"}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
