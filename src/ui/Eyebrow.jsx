import React from "react";

const Eyebrow = ({ imageSrc, text, theme = "white" }) => {
  const gradientBg =
    theme === "golden"
      ? "linear-gradient(90deg, rgba(255, 204, 0, 0.00) 0%, #FC0 50%, rgba(255, 204, 0, 0.00) 100%)"
      : "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%, rgba(255, 255, 255, 0.00) 100%)";

  return (
    <div
      className={`relative h-10 flex items-center justify-center gap-2 rounded-[100px] py-4 px-5 mb-4 border border-solid max-w-max ${theme==='light' ? 'bg-[#F1F1F1]' : 'bg-black shadow-nav-shadow'} ${
        theme === "golden" ? "border-[rgba(255,204,0,0.20)]" : "border-[rgba(255,255,255,0.20)]"
      }`}>
      {imageSrc && <img src={imageSrc} alt="icon" loading="lazy" className="h-5 w-5" />}
      <span className={`text-base max-md:text-sm font-inter ${theme==='light' ? 'text-black' : 'text-[#ECECFB]'}`}>{text}</span>
      <div className="absolute inset-[-1px_0_auto] mx-auto h-[1px] w-[60%] z-1" style={{ background: gradientBg }}></div>
    </div>
  );
};

export default Eyebrow;
