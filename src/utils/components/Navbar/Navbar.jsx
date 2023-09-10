import React from "react";
import "./Navbar.css";

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
        mobile version
      </div>
    </div>
  );
};

export default Navbar;
