"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import {RxCross2} from "react-icons/rx";

const Navbar = () => {

//by default false - it says to be notopened
  const [ mobileOpened, setMobileOpened ] = useState(false)

  return (
    <div className="n-wrapper">
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/*left side */}
          <div className="n-logo">
            <span>Digi Bus</span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              {/* making the navigation bar titles */}
              <span>what we do </span>
              <span> how it works </span>
              <span> who we invest in </span>
              <span> Testimonials </span>
            </div>

            {/* button */}
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version */}
      <div className="nm-container">
        {/* logo */}
        <span>Digi Bus</span>

        {/*menu icon */}

        {/*open the menu bar using the icon*/}

        {
          !mobileOpened ? (
          <BiMenuAltRight size={40}
          onClick={() => setMobileOpened(true)} />
          ) : (
            /*close icon of the menu */
          <RxCross2 size={40} onClick={() => setMobileOpened(false)} />
          
        )}

        {/*mobile menu */}
        <div className="nm-menu" 
        style={{transform: mobileOpened && "translateX(0%)" }}>
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>

        {/* button */}
          <div className="m-funded-button">Get Funded </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
