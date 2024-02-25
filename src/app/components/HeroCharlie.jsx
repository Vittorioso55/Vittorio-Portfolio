"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroCharlie = () => {
  ;
  return (
    
      <section className="lg:py-2 mb: py-0 flex flex-col items-left ">
         
        <div className="md:grid md:grid-cols-1 items-center px-3 xl:px-8">
         
          <br />
    
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="text-white  mb-2 text sm:text-2xl font-light flex justify-center " 
          >
            <video 
              autoPlay
              src="/image/Charlie/Charlie.Video.mp4"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300"
               
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 3 }}
            className="text-white text-left mb-2 "
          >
            <p className="text-base lg:text-lg font-light line-height: 0 text-center ">
              Name: Charlie &nbsp; Year: &nbsp; 2024 &nbsp; Scope: &nbsp; Project for "Machine Learing for Designers" Course &nbsp; Co-Designer: &nbsp;Raffaele Ammietta, Alessia La Rocca  <br />
              
            </p> 
          </motion.div>
          <br />
          <br />
          <br />
          <div className="md:grid md:grid-cols-1 gap-8 items-center px-3 xl:gap-20 sm:py-50 xl:px-16">
            <motion.div
              initial={{ opacity: 0, x: 1000, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 4 }}
              className="text-white mb-2 text-center font-bold text-base lg:text-lg "
             >
            <p className="text-base  lg:text-3xl">
              Concept
            </p>
           </motion.div>
        </div> 
          <p className="text-base lg:text-lg text-white mb-2 text  font-light flex text-center" >
          The brief of this workshop was “Unlock” and it was aimed to ideate and develop alternative unlocking interactions powered by machine learning. Our final concept was “Charlie, the Secret Guardian”.

</p>

          <br />
          <br />
        </div>
        {/* prime 4 immagini 4x4 */}
        <div className="md:grid md:grid-cols-2 gap-8  xl:gap-7 sm:py-50 xl:px-8">
            <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 5 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
          >
            <img
              src="/image/Charlie/charlienew1.jpg"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 6 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
          >
            <img
              src="/image/Charlie/charlienew2.jpg"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300" 
            />
          </motion.div>
        </div>
        <br />
    
        <br />
        <div className="md:grid md:grid-cols-1 gap-8 items-center  xl:gap-20 sm:py-50 xl:px-16">
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 7 }}
            className="text-white mb-2 text-center font-light text-base lg:text-2xl "
          >
            <p className="text-base  ">
            Charlie is designed with the primary objective of safeguarding the confidential entries made by the user in their diary. He lives within a website constructed with p5.js, and employs two distinct machine learning algorithms to identify the rightful owner of the diary. To fulfill its mission, Charlie employs two different strategies. 

Strategically positioning the Charlie box, for instance, near the entrance of a room, it remotely monitors the surrounding area to ensure no unauthorized individuals are present. In the event of someone approaching, Charlie promptly alerts its master, giving him time to hide the diary.

The second control acts directly from the user's computer webcam: if a person unrelated to the diary owner stands in front of the screen, the machine learning algorithm will detect this as a threat and Charlie will conceal the contents of the screen by lowering a shutter.                        </p> <br />
          </motion.div>
        </div>
        <br />
        <div className="md:grid md:grid-cols-2 gap-8  xl:gap-7 sm:py-50 xl:px-8">
            <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 8 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
            >
              <img
              src="/image/Charlie/charlienew6.jpg"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300" 
            />
             </motion.div>

             <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 3 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
             >
            <img
              src="/image/Charlie/charlienew3.jpg"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300" 
               />
              </motion.div>
            </div>
      </section>
  );
};
export default HeroCharlie;
