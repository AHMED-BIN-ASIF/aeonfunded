import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Emily from "../assets/images/emily.png";
import CountUp from "react-countup";
import Check from "../assets/icons/check-circle.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Trophy from "../assets/icons/trophy.svg";
import Button from "../ui/Button";

const Refferals = ({ mode }) => {
  const refferData = [
    {
      title: "Plan A",
      icon: Trophy,
      // challenge: "50k Challenge",
      tier: "Tier 1",
      features: [
        "Profit Target",
        "Drawdown Type",
        "Free Education",
      ],
    },
    {
      title: "Plan B",
      icon: Trophy,
      challenge: "100k Challenge",
      tier: "Tier 2",
      features: [
        "Profit Target",
        "Drawdown Type",
        "Free Education",
      ],
    },
    {
      title: "Plan C",
      icon: Trophy,
      challenge: "$3000 Cash",
      tier: "Tier 3",
      features: [
        "Profit Target",
        "Drawdown Type",
        "Free Education",
      ],
    },
  ];

  const referralStats = [
    { title: "Referrals", count: 17 },
    { title: "Customers", count: 42 },
    { title: "Clicks", count: 42 },
    { title: "Unique Earnings", count: 7200, prefix: "$" },
  ];

  return (
    <section
      className="py-[120px] max-xl:pt-36 max-xl:pb-20 max-md:py-10"
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : "",
      }}
    >
      <div className="container max-w-[1240px]">
        <div className="text-center flex flex-col items-center">
          <Eyebrow
            text="Referrals"
            theme={mode === "dark" ? "white" : "light"}
          />
          <h2
            className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Share, Get, and Get Paid
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[449px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
            }`}
          >
            Trade with our capital, keep up to 95% of the profits, and maximize
            your earnings with zero risk to your funds!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 my-6">
          {refferData.map((item, index) => (
            <RefferCard key={index} data={item} mode={mode} />
          ))}
        </div>

        <div
          className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
            mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
          }`}
        >
          <div
            className={`relative h-full font-inter p-8 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-8 ${
              mode === "dark" ? "bg-stats" : "bg-white"
            }`}
            style={{ backdropFilter: "blur(7.5px)" }}
          >
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={Emily}
                  alt="emily"
                  loading="lazy"
                  className="w-[74px] rounded-[10px]"
                />
                <div>
                  <span className="text-[16px] block mb-1 leading-tight font-semibold">
                    Emily Johnson
                  </span>
                  <span
                    className={`text-sm block ${
                      mode === "dark"
                        ? "text-ivoryTint opacity-60"
                        : "text-dark1f"
                    }`}
                  >
                    Awesome Customer
                  </span>
                </div>
              </div>
              <div className="relative h-8 flex items-center justify-center gap-2 rounded-[100px] py-2.5 px-4 mb-4 border border-solid max-w-max bg-black shadow-nav-shadow border-[rgba(255,255,255,0.20)]">
                <span className="text-sm font-inter text-[#ECECFB]">
                Rising Star
                </span>
                <div
                  className="absolute inset-[-1px_0_auto] mx-auto h-[1px] w-[60%] z-1"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)",
                  }}
                ></div>
              </div>
            </div>

            <ReferralStats stats={referralStats} mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
};

const RefferCard = ({ data, mode }) => {
  return (
    <div
      className={`p-[10px] rounded-[24px] border border-solid border-[rgba(255,255,255,0.06)] shadow-card-inset ${
        mode === "dark" ? "bg-black" : "bg-[#F1F1F1]"
      }`}
    >
      <div
        className={`relative h-full font-inter p-6 rounded-[18px] border border-solid border-[rgba(255,255,255,0.10)] flex flex-col ${
          mode === "dark" ? "bg-tier" : "bg-white"
        }`}
        style={{ backdropFilter: "blur(7.5px)" }}
      >
        <div className="flex justify-between items-center gap-3">
          <div
            className={`p-3 flex items-center justify-center rounded-full w-[50px] h-[50px] ${
              mode === "dark"
                ? "bg-[rgba(255,204,0,0.04)] shadow-icon-border"
                : "bg-[rgba(31,31,31,0.04)] shadow-icon-light"
            }`}
          >
            <img
              src={data.icon}
              alt="icon"
              loading="lazy"
              className={`${mode === "dark" ? "" : "filter invert"}`}
            />
          </div>
          <div className="flex gap-2.5">
            {data.challenge && (
              <span
                className={`text-[10px] font-inter relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid ${
                  mode === "dark"
                    ? "border-[rgba(255,204,0,0.10)] bg-[rgba(255,204,0,0.10)] text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.00)_inset]"
                    : "text-dark1f border-[rgba(31,31,31,0.10)] bg-[rgba(31,31,31,0.10)]"
                }`}
              >
                {data.challenge}
              </span>
            )}

            <span
              className={`text-[10px] font-inter relative h-7 max-w-max flex items-center justify-center gap-2 rounded-[100px] py-2 px-[10px] border border-solid border-[rgba(255,255,255,0.20)] ${
                mode === "dark"
                  ? "text-ivoryTint bg-[rgba(255,255,255,0.01)] shadow-nav-shadow"
                  : "text-dark1f bg-[#F1F1F1]"
              }`}
            >
              {data.tier}
            </span>
          </div>
        </div>
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]"
          >
            <div className="flex items-center gap-[10px]">
              <img
                src={Check}
                alt="check"
                loading="lazy"
                className={`w-6 h-6 ${
                  mode === "dark" ? "" : "filter grayscale invert"
                }`}
              />
              <span className="text-sm leading-none">{feature}</span>
            </div>
          </div>
        ))}
        <div className="mt-5 btn-wrp">
          <Button
            to="/"
            text="Learn More"
            variant="gold"
            size="small"
            hasIcon={true}
            icon={ArrowRight}
            mode={mode}
          />
        </div>
      </div>
    </div>
  );
};

const ReferralStats = ({ stats, mode }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2.5">
      {stats.map(({ title, count, prefix }, index) => (
        <div
          key={index}
          className={`p-4 rounded-[10px] border border-[rgba(255,255,255,0.10)] ${
            mode === "dark" ? "bg-[rgba(5,5,5,0.40)]" : "bg-[#F1F1F1]"
          }`}
        >
          <span className="text-[28px] block mb-2.5 leading-tight font-semibold">
            {prefix || ""}
            <CountUp end={count} duration={2 + index} separator="," />
          </span>
          <span
            className={`text-sm block ${
              mode === "dark" ? "text-ivoryTint opacity-60" : "text-dark1f"
            }`}
          >
            {title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Refferals;
