"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center md:text-left"
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-teal-400">
              Portfolio{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={["Website", 2000, "Vladislav Lovric", 2000]}
              wrapper="span"
              speed={5}
              style={{ fontsize: "1em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base md:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam at
            illo, tempore aperiam vel placeat ipsa sit reprehenderit quaerat?
          </p>
          <div className="">
            <button className=" mb-3 md:mb-0 px-6 py-3 text-white font-bold w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-400 hover:bg-gradient-to-br hover:from-blue-700 hover:via-blue-500 hover:to-teal-300 hover:scale-105 hover">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border-white border">
              Download CV
            </button>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-10 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[220px] h-[120px] lg:w-[440px] lg:h-[320px] relative">
            <Image
              src="/imageofme.jpg"
              alt="portfolio image"
              width={300}
              height={300}
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
