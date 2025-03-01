import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Like from "../assets/icons/like.svg";
import Rocket from "../assets/icons/rocket-icon.svg";
import HeadPhone from "../assets/icons/headphones.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Button from "../ui/Button";
import {  motion } from "framer-motion";

const aboutCards = [
  {
    icon: Like,
    title: "Your skill, our risk",
    description: "Trade with our capital without being liable for any losses.",
    link: "/",
  },
  {
    icon: Rocket,
    title: "Fast & Reliable Payouts",
    description: "Receive payouts with a high profit split, protected by our payout guarantee.",
    link: "/",
  },
  {
    icon: HeadPhone,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help.",
    link: "/",
  },
];

const AboutSection = ({ mode }) => {
  return (
    <section
      className="py-32 bg-cover bg-no-repeat bg-center max-xl:pt-28 max-xl:pb-[80px]"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "transparent",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center max-w-[520px] mx-auto flex items-center flex-col">
          <Eyebrow text="Why us" theme="white" />
          <h2
            className={`text-[50px] leading-none font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Why Trade with <span><span className={`${mode === "dark" ? "text-primary" : "text-dark1f"}`}>A</span>EON?</span>
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[450px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
            }`}
          >
            Trade with our capital, keep up to 95% of the profits, and maximize your earnings with zero risk to your funds!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[60px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20 }} // Moves the card up on hover
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
                mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
              }`}
            >
              <div
                className={`relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start ${
                  mode === "dark" ? "bg-black bg-card-gradient" : "bg-white"
                }`}
              >
                <div>
                  <div
                    className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] ${
                      mode === "dark"
                        ? "bg-[rgba(255,204,0,0.04)] shadow-icon-border"
                        : "bg-[rgba(31,31,31,0.04)] shadow-icon-light"
                    }`}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      loading="lazy"
                      className={`${mode === "dark" ? "" : "filter invert"}`}
                    />
                  </div>
                  <h4 className={`text-xl leading-tight font-semibold font-inter mt-4 mb-[10px] ${mode === "dark" ? "text-white" : "text-dark1f"}`}>
                    {card.title}
                  </h4>
                  <p className={`text-sm leading-[1.7] font-inter ${mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"}`}>
                    {card.description}
                  </p>
                </div>
                <Button to="/" text="Learn More" variant="gold" size="small" hasIcon={true} icon={ArrowRight} mode={mode} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
