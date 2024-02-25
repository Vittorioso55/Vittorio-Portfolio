"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const Herogenesi = () => {
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
              src="/image/Genesi/Genesi.mp4"
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
              Name: Genesi-01 &nbsp; Year: &nbsp; 2024 &nbsp; Scope: &nbsp; Project for "Creating for Tangible Interface" Course &nbsp; Co-Designer: &nbsp;Alessandro Plantera, Alice Mioni  <br />
              
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
            Inspired by the Genesis of the Bible and the Original Sin, Genesi-01 is the witness of unknown sins from unknown people. A mysterious box delivered by The Creator to the Sinner 1, intended for traveling and record sins from all over the world. 
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
              src="/image/Genesi/Genesi0.png"
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
              src="/image/Genesi/Genesinew1.jpg"
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
            The concept of this box revolves around the original sin of Genesis. The box is always delivered and shipped inside its transport box. Genesi.01 opens like a book (reference to the Bible) and allows the user to record their sin, for a maximum of 10 seconds. The sin will be transcribed on a sheet of paper which will always remain inside the box and no one will be able to take it. Sin is also codified so that no one will ever discover it, and the sinner will be freed from its burden. A confessional, a traveling witness which will one day return to his creator
            </p> <br />
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
              src="/image/Genesi/Genesinew2.jpg"
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
              src="/image/Genesi/Genesinew3.jpg"
              alt="Description of the image"
              className="w-full max-h-full rounded-lg hover:scale-105 duration-300" 
               />
              </motion.div>
            </div>
      </section>
  );
};
export default Herogenesi;
