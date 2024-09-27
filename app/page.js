import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mx-auto mt-24 py-4 px-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
};

export default page;
