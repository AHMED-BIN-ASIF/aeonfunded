import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Brand from "../assets/images/brand.svg";
import BrandLight from "../assets/images/brand-light.svg";

const Header = ({ mode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Challenges", path: "/#plans" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Payouts", path: "/payouts" },
    { name: "Affiliate Program", path: "/affiliate-program" },
    { name: "FAQ", path: "http://Help.Aeonfunded.com", target: "_blank" },
  ];

  // Helper to handle smooth scrolling when a link contains a hash.
  const handleLinkClick = (path) => {
    setMenuOpen(false);
    const hashIndex = path.indexOf("#");
    if (hashIndex !== -1) {
      const hash = path.slice(hashIndex + 1);
      // If on home page, scroll to the element smoothly.
      if (location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another page, navigate to home page with the hash.
        window.location.href = "/#" + hash;
      }
    }
  };

  return (
    <header className="left-0 right-0 top-0 w-full z-10 py-4">
      <div className="container max-w-[1832px]">
        <div className="flex items-center justify-between gap-5 xl:gap-[60px]">
          {/* Brand */}
          <Link
            to="/"
            className="max-w-[134px] h-16 flex items-center transition-all duration-200 ease-in-out relative"
          >
            <img
              src={Brand}
              alt="Aeon Funding Brand"
              loading="lazy"
              className={`${mode === "dark" ? "opacity-100" : "opacity-0"}`}
            />
            <img
              src={BrandLight}
              alt="Aeon Funding Brand"
              loading="lazy"
              className={`absolute inset-0 ${
                mode === "dark" ? "opacity-0" : "opacity-100"
              }`}
            />
          </Link>
          {/* Hamburger Button */}
          <button
            className="lg:hidden text-white z-20 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                mode === "dark" ? "bg-white" : "bg-dark1f"
              } ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 my-1 transition-all duration-300 ${
                mode === "dark" ? "bg-white" : "bg-dark1f"
              } ${menuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                mode === "dark" ? "bg-white" : "bg-dark1f"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>
          {/* Main Navigation */}
          <nav
            className={`
              ${mode === "dark" ? "max-lg:bg-black shadow-nav-shadow" : "max-lg:bg-[#e5e7eb]"}
              max-w-[666px] rounded-[100px] p-[17px_30px] bg-[rgba(18,18,18,0.10)]
              max-xl:max-w-[580px] max-xl:p-[14px_24px] max-lg:overflow-hidden 
              max-lg:absolute top-[80px] left-0 right-0 max-lg:max-w-full max-lg:w-[90%] max-lg:mx-auto
              max-lg:rounded-lg transition-all ease-in-out duration-500 backdrop:blur-lg z-[20] lg:z-auto  
              ${menuOpen ? "max-lg:h-auto max-lg:opacity-100" : "max-lg:h-0 max-lg:opacity-0"}
            `}
          >
            <ul className="flex flex-col lg:flex-row items-center justify-between gap-[30px] max-xl:gap-5">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    target={item.target}
                    className={`text-sm xl:text-base leading-normal font-normal font-inter transition-all duration-300 ease-in-out ${
                      mode === "dark" ? "text-white hover:text-primary" : "text-dark1f"
                    }`}
                    onClick={() => handleLinkClick(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden max-lg:flex max-lg:flex-col mt-4 justify-center lg:flex-row items-center gap-[14px]">
              <Link
                to="http://trading.aeonfunded.com"
                target="_blank"
                className={`btn font-inter font-medium leading-none rounded-[100px] h-10 px-5 py-4 flex items-center justify-center
                  ${mode === "dark" ? "bg-[#FFD221] text-black shadow-nav-shadow hover:bg-white hover:text-black" : "bg-black text-white hover:bg-primary hover:text-black"}`}
              >
                Get Funded
              </Link>
              <Link
                to="http://trading.aeonfunded.com"
                target="_blank"
                className={`btn font-inter font-medium leading-none rounded-[100px] transition-all duration-300 ease-in-out
                   h-10 px-5 py-4 flex items-center justify-center
                   ${mode === "dark" ? "bg-[rgba(255,255,255,0.10)] text-white shadow-nav-shadow hover:bg-white hover:text-black" : "text-black hover:bg-dark1f hover:text-white"}`}
              >
                Log In
              </Link>
            </div>
          </nav>
          <div className="hidden lg:flex flex-col lg:flex-row items-center gap-[14px]">
            <Link
              to="http://trading.aeonfunded.com"
              target="_blank"
              className={`btn font-inter font-medium leading-none rounded-[100px] h-10 px-5 py-4 flex items-center justify-center transition-all duration-300 ease-in-out
              ${mode === "dark" ? "bg-[#FFD221] text-black shadow-nav-shadow hover:bg-white hover:text-black" : "bg-black text-white hover:bg-primary hover:text-black"}`}
            >
              Get Funded
            </Link>
            <Link
              to="http://trading.aeonfunded.com"
              target="_blank"
              className={`btn font-inter font-medium leading-none rounded-[100px] h-10 px-5 py-4 flex items-center justify-center transition-all duration-300 ease-in-out
                ${mode === "dark" ? "bg-[rgba(255,255,255,0.10)] text-white shadow-nav-shadow hover:bg-white hover:text-black" : "text-black hover:bg-dark1f hover:text-white"}`}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
