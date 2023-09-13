"use client";

import React from "react";
import "./OurDifference.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";

const OurDifference = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">

            {/* texts */}
            <span className="tag"> Our Difference</span>
            <span className="title">Fair capital, hassle free</span>
            <span className="text">
              Our mission is to level the playing field for early stage growth
              in business capital
              <br />
              We provide capital that is unbiased, flexible and non dilutive
              with the execution support to accelerate value creation
            </span>

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
