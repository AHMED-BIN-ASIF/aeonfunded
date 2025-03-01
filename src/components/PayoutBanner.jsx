import React from "react";
import { motion } from "framer-motion";
import Texture from "../assets/images/texture.svg";
import BannerGradient from "../assets/images/banner-gradient.svg";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
import Chart from "../assets/icons/hart-arrow-up.png";
import Notepad from "../assets/icons/notepad.svg";
import Deal from "../assets/icons/deal.svg";

const payoutCards = [
  {
    index: 1,
    icon: Chart,
    title: "Highest Payout Ever",
    description: "Trade with our capital without being liable for any losses.",
  },
  {
    index: 2,
    icon: Notepad,
    title: "Last Month Payout",
    description:
      "Receive Payouts with a High Profit Split, Protected by our Payout Guarantee.",
  },
  {
    index: 3,
    icon: Deal,
    title: "Total Funded Traders",
    description: "Our Dedicated Support team is always here to help.",
  },
];

const PayoutBanner = ({ mode }) => {
  return (
    <section
      className="relative pt-[120px] pb-[100px] rounded-[0_0_40px_40px] overflow-hidden md:min-h-[calc(100vh-100px)]  flex items-center max-2xl::pt-[90px] max-xl:pt-[70px] max-md:pt-12 max-md:pb-12"
      style={{
        background:
          mode === "dark"
            ? ""
            : "radial-gradient(165.19% 140% at 50% 10%, rgba(255, 255, 255, 0.00) 37.41%, #000 69.27%, #000 100%)",
      }}
    >
      <div className="container max-w-[1240px] relative z-[3]">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <Eyebrow text="Payouts" theme="golden" />
          <h1
            className={`text-[80px] font-semibold leading-[1.12] tracking-[-1.6px] max-xl:text-[56px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Glimpse Of Successful AEON Trading Stories
          </h1>
          <p
            className={`text-base m-[16px_0_32px] max-w-[631px] ${
              mode === "dark" ? "text-[#FBF6EC]" : "text-dark1f"
            }`}
          >
            Help AeonFunded grow and earn up to 20% commission – There’s no
            limit on how much you can earn profit!
          </p>
          <Link
            to="/"
            className={`btn text-[16px] font-inter font-medium leading-none shadow-nav-shadow rounded-[100px] h-10 px-8 py-4 flex items-center justify-center ${
              mode === "dark" ? "text-black bg-white" : "text-white bg-black"
            }`}
          >
            Get Funded
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {payoutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ y: -10 }}
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
                  <div
                    className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] ${
                      mode === "dark"
                        ? "bg-[rgba(255,204,0,0.04)] shadow-icon-border"
                        : "shadow-icon-light bg-[#F1F1F1]"
                    }`}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      loading="lazy"
                      className={`${mode === "dark" ? "" : "filter invert"}`}
                    />
                  </div>
                  <h4
                    className={`text-xl leading-tight font-semibold font-inter mt-4 mb-[10px] ${
                      mode === "dark" ? "text-white" : "text-dark1f"
                    }`}
                  >
                    {card.title}
                  </h4>
                  <p
                    className={`text-sm leading-[1.7] font-inter ${
                      mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
          className={`w-full h-full object-cover object-bottom ${
            mode === "dark" ? "" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
};

export default PayoutBanner;
