import React from "react";
import App from "../components/App.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import RuleOfRose from "../pages/RuleOfRose.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" component={App} />
        <Route path="/ruleofrose" component={RuleOfRose} />
        <Route path="/about" component={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
