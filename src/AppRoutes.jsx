import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import HowitWorksPage from "./pages/HowitWorksPage";
import Affiliate from "./pages/Affiliate";
import Payouts from "./pages/Payouts";

const AppRoutes = ({ mode }) => {
  const { pathname } = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} />} />
      <Route path="/how-it-works" element={<HowitWorksPage mode={mode} />} />
      <Route path="/affiliate-program" element={<Affiliate mode={mode} />} />
      <Route path="/payouts" element={<Payouts mode={mode} />} />
    </Routes>
  );
};

export default AppRoutes;
