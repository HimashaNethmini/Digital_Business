"use client"

import React from "react";
import "./Testimonials.css";
import SlickSlider from "./SlickSlider";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">

          {/* text with animations */}
          <div className="t-head">
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
