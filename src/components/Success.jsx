import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Eyebrow from "../ui/Eyebrow";
import SccessBg from "../assets/images/success-bg.webp";
import Payout from "../assets/images/payout-chart.svg";
import PaidChart from "../assets/images/bar-chart.svg";
import World from "../assets/images/world.svg";

gsap.registerPlugin(ScrollTrigger);

const successData = [
  {
    eybrowText: "Total Payouts",
    title: 1240000,
    prefix: "$",
    suffix: "+",
    bodyClass: "px-6 max-lg:w-full",
    description:
      "The total amount of money paid out to traders over time, showcasing overall earnings.",
    extraInfo: [
      { text: "Average Payout: $2521", highlight: false },
      { text: "Total Paid out: $1.24M", highlight: true },
    ],
    image: Payout,
    spanClass: "lg:row-span-2 max-lg:col-span-2 max-md:col-span-1",
    layoutClass: "flex flex-col justify-between pt-6",
    imageClass: "max-lg:w-full max-lg:object-cover",
  },
  {
    eybrowText: "Highest Paid Trader",
    title: 18821,
    prefix: "$",
    description:
      "The trader with the highest earnings, setting a benchmark for success.",
    image: PaidChart,
    layoutClass: "grid lg:grid-cols-[1fr_0.5fr] p-8",
  },
  {
    eybrowText: "Traders Worldwide",
    title: 18000,
    suffix: "+",
    description:
      "The total number of active traders across different countries, highlighting global reach.",
    image: World,
    imageClass: "w-full h-[221px] max-w-[221px] absolute right-[-35px] bottom-[-58px]",
    layoutClass: "grid lg:grid-cols-[1fr_0.5fr] p-8",
  },
];

const Success = ({ mode }) => {
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      const cards = gsap.utils.toArray(".success-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          x: (index) => (index === 0 ? "-40%" : "40%"), // First card from left, others from right
          scale: 0.95, // Slight scale for smoother effect
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 2.5, // Increased for smoother motion
          ease: "power2.out", // More natural easing
          stagger: 0.3, // Delayed entrance for each card
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%", // Adjusted start position
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);


  return (
    <section
      className="py-[120px] max-xl:py-[80px] overflow-hidden max-md:py-10"
      style={{
        background:
          mode === "dark" ? `url(${SccessBg}) no-repeat center / cover` : "",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center max-w-[842px] mx-auto flex items-center flex-col">
          <Eyebrow text="Success" />
          <h2
            className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Trading <span className={mode === "dark" ? "text-primary" : "text-black"}>Success</span> in Numbers
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[540px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
            }`}
          >
            A dynamic community where traders grow, earn, and succeed. See real results and take your trading journey to the next level.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[60px] max-md:grid-cols-1">
          {successData.map((data, index) => (
            <SuccessCard key={index} {...data} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessCard = ({ eybrowText, title, suffix, prefix, bodyClass, description, extraInfo, image, spanClass, imageClass, layoutClass, mode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`success-card p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset hover:shadow transition-all duration-500 ease-in-out ${spanClass || ""} ${mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"}`}
    >
      <div className={`relative h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] ${layoutClass} gap-5 items-center overflow-hidden ${mode === "dark" ? "bg-card-radial" : "bg-white"}`} style={{ backdropFilter: "blur(7.5px)" }}>
        <div className={`${bodyClass}`}>
          <div className={`relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid border-[rgba(255,255,255,0.20)] ${mode === "dark" ? "text-ivoryTint shadow-nav-shadow bg-[rgba(255,255,255,0.01)]" : "text-black bg-[#F1F1F1]"}`}> <span className="text-[10px] font-inter font-medium">{eybrowText}</span></div>
          <h4 className={`text-[50px] leading-tight font-semibold font-inter mt-4 mb-[10px] max-lg:text-4xl ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
            {prefix}
            {inView && <CountUp end={title} duration={4} separator="," />}
            {suffix}
          </h4>
          <p className={`text-sm leading-[1.7] font-inter ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}>{description}</p>
        </div>
        <img src={image} alt="Success" loading="lazy" className={`${imageClass} || ${mode === "dark" ? "" : "filter grayscale invert"} w-full h-auto max-h-[234px]`} />
      </div>
    </div>
  );
};

export default Success;
