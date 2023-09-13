"use client";

import React from "react";
import "./Whatwedo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/src/utils/animations";

const Whatwedo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">

          {/* main texts */}
          <div className="wwd-head">
            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="tag">What we do</motion.span>

            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="title">
              {" "}
              Emowering founders with non dilutive capital and excution
              expertise
            </motion.span>
            
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
             className="desc">Here is how we can evaluate</motion.span>
          </div>

          {/* 2 block cards */}
          <div className="wwd-blocks">

            {/*First block*/}
            <div className="wwd-block">
                <span className="sec-title"> Blue Advance <br/></span>
                <span className="text">
                    Fund recurring growth expenses e.g. customer acquisition, inventory
                </span>

                {/* features inside the block */}
                <div className="block-features">
                    {
                        features.slice(0,3).map ((feature , i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="features" width={60} height={60} />
                                <span>{feature.title}</span>
                            </div>

                        ))               
                    }
                </div>
            </div>


            {/*second block*/}
            <div className="wwd-block">
                <span className="sec-title"> Blue Seed <br/> </span>
                <span className="text">
                    Fund one's offs to scale e.g. product, hiring
                </span>

                {/* features inside the block */}
                <div className="block-features">
                    {
                        features.slice(3,6).map ((feature , i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="features" width={60} height={60} />
                                <span>{feature.title}</span>
                            </div>

                        ))               
                    }
                </div>
            
            </div>
          </div>

          {/* supporting blocks */}
          <div className="wwd-support">

            {/* left side*/}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="desc">
                Data Insights and full stack expertise to supercharge growth
              </span>
            </div>

            {/*right side */}
            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing
                social media platforms
              </span>

              <span className="text">
                On demand exxecution expertise at cost or revenue share 
                proposition design, engineering, marketing analytics,
                partnerships, brands, intellectual property, market expansion talent management.
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
