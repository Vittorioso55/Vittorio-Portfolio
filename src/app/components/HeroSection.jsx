"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import MovingText from "react-moving-text";

const HeroSection = () => {
  return (
    <section className="lg:py-4  flex flex-col items-left justify-center">   
      <motion.div
        
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{  scale: 1.2 }}
        className="text-white  text-2xl sm:text-4xl lg:text-8xl font-extrabold text-center justify-center "
      >        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300  ">
          Hello, I&apos;m{" "}
        </span>
        <br />    
        <TypeAnimation
          sequence={[
            "Vittorio",
            1000,
            "a Interaction Designer",
            1000,
            "a Web Developer",
            1000,
            "a UI/UX Designer",
            1000,
            "a Maker",
            1000,
          ]}
          wrapper="span"
          speed={5}
          repeat={Infinity}
        />
      </motion.div>
         
    </section>
  );
};

export default HeroSection;


