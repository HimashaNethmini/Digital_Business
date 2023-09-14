import React from "react";
import "./Howitworks.css";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { featureVariants, tagVariants, titleVariants } from "@/src/utils/animations";

const Howitworks = () => {
  return (
    <div className="hit-wrapper">
      <div className="container">
        <div className="hit-container">
          {/*head part with animations */}
          <div className="hit-head">
            <motion.span
            variants={tagVariants} 
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag">How it Works</motion.span>

            <motion.span 
            variants={titleVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="title">
              {" "}
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          {/* features + animation*/}
          <div className="hit-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
              variants={featureVariants}
              initial="offscreen"
              whileInView={"onscreen"}
               key={i} 
               className="hit-feature">

                {/*left side + animation */}
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type : "easeIn",
                    duration : 1,
                    delay: .7
                  }
                }}
                className="detail">
                  
                  <span className="des">0 {i+1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>

                {/*right side*/}
                <div className="icon"></div>
                <Image src={feature.icon} alt="images-features" 
                width={128} height={128} 
                style={{translate: "50% 0rem"}} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
