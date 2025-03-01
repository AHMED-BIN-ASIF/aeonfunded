import React, { useEffect } from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Success from "../components/Success";
import HowitWorks from "../components/HowitWorks";
import PricingPlan from "../components/PricingPlan";
import Secure from "../components/Secure";
import Benifits from "../components/Benifits";
import Reviews from "../components/Reviews";
import JoinDiscord from "../components/JoinDiscord";
import Faqs from "../components/Faqs";
import { useLocation } from "react-router-dom";

const Home = ({mode}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Using a timeout ensures that the element is mounted before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <main>
      <div className="px-6 max-md:px-4">
        <Banner mode={mode} />
      </div>
      <AboutSection mode={mode} />
      <Success mode={mode} />
      <HowitWorks mode={mode} />
      <PricingPlan mode={mode} />
      <Secure mode={mode}/>
      <Benifits mode={mode} />
      <div className="px-6 max-md:px-4">
        <Reviews mode={mode} />
      </div>
      <Faqs mode={mode} />
      <JoinDiscord mode={mode}/>
    </main>
  );
};

export default Home;
