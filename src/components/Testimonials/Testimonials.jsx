import React from "react";
import "./Testimonials.css";
//import { motion } from "framer-motion";
//import { tagVariants, titleVariants } from "@/src/utils/animations";
import SlickSlider from "./SlickSlider";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          {/* text with animations */}
          <div className="t-head">
            {/*<motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Testimonals
            </motion.span>

            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Access capital that complements traditional funding options
  </motion.span> */}
            <span className="tag">Testimonals</span>
            <span className="title">Access capital that complements traditional funding options</span>

            <span className="des">What people say about us</span>
          </div>
        </div>

        {/* slider*/}
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testimonials;
