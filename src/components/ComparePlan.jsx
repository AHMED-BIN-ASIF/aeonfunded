import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import Check from "../assets/icons/check-circle.svg";

const ComparePlan = ({ mode }) => {
  const planData = [
    { title: "Profit Target", value: "6-8%" },
    { title: "Drawdown Type", value: "Balance Based" },
    { title: "Free Education", value: "Yes" },
    { title: "Min Trading days", value: "0 Min Trading days" },
    { title: "Scaling Plan", value: "95% Profit Split" },
    { title: "Payouts", value: "Every 8 Days (Prime)" },
    { title: "100k Evaluation", value: "$399" }
  ];

  return (
    <motion.section
      className="py-[120px] bg-cover bg-no-repeat bg-center max-xl:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(59.12% 34.61% at 85.31% 52.01%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(300deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 204, 0, 0.5) 100%), 0px -173.5px / 100% 145.749% no-repeat"
            : ""
      }}
    >
      <div className="container max-w-[1220px]">
        <div className="text-center flex items-center flex-col mb-[60px] max-md:mb-10">
          <Eyebrow text=" Compare" theme={mode === "dark" ? "white" : "light"} />
          <h2
            className={`text-[50px] leading-[1.2] font-semibold tracking-[-0.5px] max-w-[850px] mx-auto max-lg:text-4xl ${
              mode === "dark" ? "text-white" : "text-dark1f"
            }`}
          >
            Prime Challenge Compared to Competitors
          </h2>
          <p
            className={`text-sm leading-[1.71] max-w-[700px] mx-auto mt-[10px] ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f opacity-80"
            }`}
          >
            Explore how Prime Challenge stands out with unique features,
            superior benefits, and a better overall experience.
          </p>
        </div>
        <div
          className={`rounded-[24px] p-2.5 border border-[rgba(255,255,255,0.05)] ${
            mode === "dark"
              ? "text-white bg-[#050505] bg-plan-card shadow-card-inset"
              : "text-dark1f bg-[#F1F1F1]"
          }`}
          style={{ backdropFilter: "blur(7.5px)" }}
        >
          <PlanCard data={planData} mode={mode} />
        </div>
      </div>
    </motion.section>
  );
};

const PlanCard = ({ data, mode }) => {
  return (
    <div
      className={`font-inter relative font-semibold rounded-[20px] p-6 border border-[rgba(255,255,255,0.10)] ${
        mode === "dark"
          ? "text-white bg-[rgba(0,0,0,0.10)] bg-plan-card"
          : "bg-white text-dark1f"
      }`}
      style={{ backdropFilter: "blur(7.5px)" }}
    >
      <div className="grid items-center grid-cols-3 max-md:grid-cols-1 gap-3 py-5 mb-8 max-md:hidden">
        <div></div>
        <div
          className={`text-xl font-semibold trackling-[-0.2] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          <span
            className={`font-normal text-sm ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f"
            }`}
          >
            When you trade with:
          </span>{" "}
          <span>
            <span
              className={`${
                mode === "dark" ? "text-[#fc0]" : "text-dark1f"
              }`}
            >
              A
            </span>
            EONFunded
          </span>
        </div>
        <div
          className={`text-xl font-semibold trackling-[-0.2] ${
            mode === "dark" ? "text-white" : "text-dark1f"
          }`}
        >
          <span
            className={`font-normal text-sm ${
              mode === "dark" ? "text-ivoryTint" : "text-dark1f"
            }`}
          >
            When you trade with:
          </span>{" "}
          Others
        </div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid items-center grid-cols-3 max-md:grid-cols-1 gap-3 py-5 border-b border-dashed border-[rgba(226,234,253,0.10)]"
        >
          <div className="flex items-center gap-[10px]">
            <img
              src={Check}
              alt="check"
              loading="lazy"
              className="w-6 h-6"
            />
            <span className="text-sm leading-none">{item.title}</span>
          </div>
          {item.value && (
            <div>
              <span className="text-ivoryTint font-normal text-sm hidden max-md:block mb-2">
                When you trade with:
              </span>
              <div className="flex justify-between items-center">
                <span
                  className={`text-base font-semibold trackling-[-0.2] hidden max-md:block ${
                    mode === "dark" ? "text-white" : "text-dark1f"
                  }`}
                >
                  <span
                    className={`${
                      mode === "dark" ? "text-[#fc0]" : "text-dark1f"
                    }`}
                  >
                    A
                  </span>
                  EONFunded{" "}
                </span>
                <span className="text-sm leading-none">{item.value}</span>
              </div>
            </div>
          )}
          {item.value && (
            <div className="flex justify-between items-center">
              <span
                className={`text-base font-semibold trackling-[-0.2] hidden max-md:block ${
                  mode === "dark" ? "text-white" : "text-dark1f"
                }`}
              >
                Others
              </span>
              <span
                className={`text-sm leading-none opacity-60 font-normal ${
                  mode === "dark" ? "text-ivoryTint" : "text-dark1f"
                }`}
              >
                {item.value}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComparePlan;
