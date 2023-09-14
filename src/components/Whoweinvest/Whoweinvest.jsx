import React from "react";
import "./Whoweinvest.css";
import { whoWeInvest } from "@/src/utils/data";
import image from "@/public/persons.png";

const Whoweinvest = () => {
  return (
    <div className="ww-wrapper">
      <div className="container">
        <div className="ww-container">
          {/* left side */}
          <div className="ww-left">
            <div className="head">
              <span className="tag">Who we invest in</span>
              <span className="title">
                Digital businesses <br /> with early transaction
              </span>
            </div>

            {/* features */}
            <div className="ww-features">
              {whoWeInvest.map((feature, i) => (
                <div key={i} className="ww-feature">
                  <span className="des"> {feature.title}</span>
                  <span className="text">{feature.des}</span>
                </div>
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
