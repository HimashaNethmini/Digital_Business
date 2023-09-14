import React from "react";
import "./Whoweinvest.css";
import { whoWeInvest } from "@/src/utils/data";
import image from "@/public/persons.png";
import { motion } from "framer-motion";
import { containerVariants, tagVariants, titleVariants } from "@/src/utils/animations";

const Whoweinvest = () => {
  return (
    <div className="ww-wrapper">
      <div className="container">
        <div className="ww-container">
          {/* left side */}
          <div className="ww-left">
            <div className="head">
              <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"} 
              className="tag">Who we invest in</motion.span>

              <motion.span 
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title">
                Digital businesses <br /> with early transaction
              </motion.span>
            </div>

            {/* features + animations */}
            <div className="ww-features">
              {whoWeInvest.map((feature, i) => (

                <motion.div
                variants={containerVariants (i * 0.05 + 1)}
                initial="offscreen"
                whileInView={"onscreen"}
                 key={i} className="ww-feature">
                  <span className="des"> {feature.title} <br /> </span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
              
            </div>
          </div>

          {/* right side */}
          <div className="ww-right">
            <img src="persons.png" alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweinvest;
