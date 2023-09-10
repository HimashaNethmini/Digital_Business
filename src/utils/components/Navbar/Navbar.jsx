import React from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
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
        <BiMenuAltRight size={40} />



        {/*mobile menu */}
        <div className="nm-menu">
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
