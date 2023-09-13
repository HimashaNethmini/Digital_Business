"use client";

import React from "react";
import "./OurDifference.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/src/utils/animations";

const OurDifference = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">

            {/* texts with animations*/}
            <motion.span 
            variants={tagVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag"> Our Difference</motion.span>

            <motion.span
            variants={titleVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="title">Fair capital, hassle free</motion.span>

            <motion.span
            variants={desVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text">
              Our mission is to level the playing field for early stage growth
              in business capital
              <br />
              We provide capital that is unbiased, flexible and non dilutive
              with the execution support to accelerate value creation
            </motion.span>

          </div>

          {/* features */}
          <div className="od-features">

            {
              ourDiffFeatures.map((feature, i) => (
                < div key={i} className="od-feature">
                  <Image src ={feature.icon}
                  alt="features"
                  width={128}
                  height={128} 
                  />
                <br />
                  <span className="sec-title"> {feature.title}</span>
                  <span className="text"><br />{feature.des}</span>

                </div>

              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDifference;
