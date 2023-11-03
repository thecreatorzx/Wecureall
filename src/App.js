import React from "react";
import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../Components/nav";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import Services from "../Components/Services";
import Reviews from "../Components/Reviews";
import WhyUs from "../Components/WhyUs";
import Footer from "../Components/Footer";
import FAQs from "../Components/FAQs";
import Explore from "../Components/Explore";
import Appoint from "../Components/Appoint";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Explore />
      <WhyUs />
      <Stats />
      <Reviews />
      <FAQs />
      <Appoint />
      <Footer />
    </div>
  );
}

export default App;
