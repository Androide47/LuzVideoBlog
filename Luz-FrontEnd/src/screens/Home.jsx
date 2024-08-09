import React from "react";
import Carousel from "../components/Carousel"; // Adjust the import path if necessary
import AboutUs from "../components/AboutUs"; // Adjust the import path if necessary
import Stakes from "../components/stakes";
import ValuePropSection from "../components/Value";
import PlanSection from "../components/PlanSection";
import CallToAction from "../components/CalltoAction";
const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Stakes />
      <ValuePropSection />
      <PlanSection />
      <CallToAction />
    </div>
  );
};

export default Home;
