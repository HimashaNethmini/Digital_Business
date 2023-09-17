import React from "react";
import "./Footer.css";
import Email from "../Email/Email";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today ! </span>
          <Email />

          <hr />

          {/*menu */}
          <div className="f-menu">
            <span>Home</span>
            <span>What we do</span>
            <span>How it works</span>
            <span>Who we invest in</span>
          </div>
        <hr />

        <span className="text"> Made by Care</span>

        </div>
      </div>
    </div>
  );
};

export default Footer;
