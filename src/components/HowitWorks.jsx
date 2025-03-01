import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Target from "../assets/icons/target.svg";
import Capital from "../assets/icons/safe-box.svg";
import Paid from "../assets/icons/donate-coin.svg";
import Dashboard from "../assets/images/challenge-dasboard.webp";
import DashboardCard from "../assets/images/dashboard-card.webp";
import DashboardCardLight from "../assets/images/dashboard-card-light.webp";
import DashboardLight from "../assets/images/dashboard-light.webp";

const aboutCards = [
  {
    index: 1,
    icon: Target,
    title: "Take a Challenge",
    description: "Trade with our capital without being liable for any losses.",
  },
  {
    index: 2,
    icon: Capital,
    title: "Unlock Capital",
    description:
      "Receive payouts with a high profit split, protected by our payout guarantee.",
  },
  {
    index: 3,
    icon: Paid,
    title: "Trade & Get Paid",
    description: "Our dedicated support team is always here to help.",
  },
];

const HowitWorks = ({ mode }) => {
  const CardRef = useRef(null);

  useEffect(() => {
    gsap.to(CardRef.current, {
      y: "-20px",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <motion.section
      className="pt-[205px] pb-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container max-w-[1240px]">
        <motion.div
          className="grid grid-cols-[.65fr_1fr] gap-5 items-center max-lg:grid-cols-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center ">
            <Eyebrow text="How it works" theme="white" />
            <h2 className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl ${mode === 'dark' ? 'text-white ' : 'text-dark1f'}`}>
              Trading made <span className={`${mode === 'dark' ? 'text-primary ' : 'text-dark1f'}`}>easy</span>, For You.
            </h2>
            <p className={`text-sm leading-[1.71] mx-auto mt-[10px] ${mode === 'dark' ? 'text-ivoryTint ' : 'text-dark1f opacity-80'}`}>
              Your skills with our risk. You're not liable for any losses.
            </p>
            <div className="flex gap-[10px] mt-8 max-lg:justify-center">
              <Button to="http://trading.aeonfunded.com" text="Get Funded" mode={mode} />
              <Button to="/how-it-works" text="Learn More" variant="gold" hasIcon={true} icon={ArrowRight} mode={mode} />
            </div>
          </div>
          <div className="relative max-lg:mt-14">
            <img src={mode === 'dark' ? Dashboard : DashboardLight} alt="dashboard" loading="lazy" className="w-full" />
            <img ref={CardRef} src={mode === 'dark' ? DashboardCard : DashboardCardLight} alt="dashboard" loading="lazy" className={`w-full absolute top-0 -mt-20 max-xl:-mt-14 max-lg:-mt-10 max-md:-mt-6 transition-all duration-200 ease-in-out  ${mode==="dark"? "max-w-[285px] max-lg:max-w-[200px]  right-[2%]": "max-w-[245px] max-lg:max-w-[170px]   right-[8%] max-lg:right-[6%]"}`} />
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 mt-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${mode === 'dark' ? 'bg-black ' : 'bg-[#F1F1F1]'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              whileHover={{ y: -20 }} // Moves the card up on hover
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`relative p-6 h-full rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-5 justify-between items-start ${mode === 'dark' ? 'bg-card-gradient ' : 'bg-white'}`}>                
                <div>
                  <div className="flex justify-between items-center">
                    <div className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] ${mode === 'dark' ? 'shadow-icon-border bg-[rgba(255,204,0,0.04)]' : 'shadow-icon-light bg-[rgba(31,31,31,0.04)]'}`}>                      
                      <img src={card.icon} alt={card.title} loading="lazy" className={`${mode === 'dark' ? '' : 'filter invert'}`} />
                    </div>
                    <span className={`text-[10px] font-inter relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid border-[rgba(255,255,255,0.20)] ${mode === 'dark' ? 'text-ivoryTint bg-[rgba(255,255,255,0.01)] shadow-nav-shadow' : 'text-dark1f bg-[#F1F1F1]'}`}>{card.index} Step</span>
                  </div>
                  <h4 className={`text-xl leading-tight font-semibold font-inter mt-4 mb-[10px] ${mode === 'dark' ? 'text-white ' : 'text-dark1f'}`}>{card.title}</h4>
                  <p className={`text-sm leading-[1.7] font-inter ${mode === 'dark' ? 'text-ivoryTint ' : 'text-dark1f opacity-80'}`}>{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowitWorks;
