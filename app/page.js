import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mx-auto  py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
};

export default page;
