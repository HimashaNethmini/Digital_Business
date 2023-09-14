import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/utils/animations";
import { testimonialsData } from "@/src/utils/data";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          {/* text with animations */}
          <div className="t-head">
            <motion.span
            variants={tagVariants}
            initial="offscreen"
            whileInView={"onscreen"} 
            className="tag">Testimonals</motion.span>

            <motion.span 
            variants={titleVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="title">
                Access capital that complements traditional funding options
            </motion.span>

            <span className="des">What people say about us</span>
          </div>

          {/* slider*/}
          <div className="t-slider">
            {
                testimonialsData.map((feature, i) => (
                    <div key={i}>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
