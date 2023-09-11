import React from "react";
import "./Hero.css";
import Email from "../Email/Email";

const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          {/*left side */}
          <div className="h-left">Left</div>

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
