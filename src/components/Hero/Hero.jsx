"use client";

import React from "react";
import "./Hero.css";
import Email from "../Email/Email";
import { HeroData } from "@/src/utils/data";
import { delay, motion } from "framer-motion";

const Hero = () => {

  // make variants for person pill bg for animation
  const variants = (delay) => ({
    initial : {
      y: "18rem"

    },
    animate : {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay
      }
    }
  });

  //image animation
  const imgVariants = () => ({
    initial: {
      y: "18rem"
    },

    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">

        {/* hidden arrow */}
        <img src = "hero/hero-arrow.png"
        alt="arrow hidden"
        className="h-arrow" />

        <div className="h-container">
          {/*left side */}
          <div className="h-left">

            <div className="image-row">
              {
                /*take only 3 data from the array herodata*/
                HeroData.slice(0,3).map((person, i) => (

                  <div className="person-pill" key={i}>
                    
                    {/*animation */}
                    <motion.div 
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{backgroundColor: person.bg}}
                    className="person-pill-bg">

                      <motion.img 
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src} alt={person.src}  />
                    </motion.div>
                    </div>

                ))
              }
            </div>
          
            {/* second pill person*/}
            <div className="image-row">
            {
                /*take only 3 data from the array herodata*/
                HeroData.slice(3,6).map((person, i) => (

                  <div className="person-pill" key={i}>
                    <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{backgroundColor: person.bg}}
                    className="person-pill-bg">

                      <motion.img 
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src} alt={person.src}  />
                    </motion.div>
                    </div>

                ))
              }
            </div>
          </div>

          {/*right side */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grow your</span>
              <span>Digital Business</span>
            </div>

            <div className="h-desc">
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            {/* email box*/}
            <Email/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
