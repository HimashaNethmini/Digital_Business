import React from "react";
import "./Hero.css";
import Email from "../Email/Email";
import { HeroData } from "@/src/utils/data";

const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          {/*left side */}
          <div className="h-left">

            <div className="image-row">
              {
                /*take only 3 data from the array herodata*/
                HeroData.slice(0,3).map((person, i) => (

                  <div className="person-pill" key={i}>
                    <div className="person-pill-bg">
                      <img src={person.src} alt={person.src}  />
                    </div>

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
                    <div className="person-pill-bg">
                      <img src={person.src} alt={person.src}  />
                    </div>

                  </div>
                ))
              }
            </div>

          
          </div>








,







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
