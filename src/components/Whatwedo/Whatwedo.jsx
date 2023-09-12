import React from "react";
import "./Whatwedo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";


const Whatwedo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* main texts */}
          <div className="wwd-head">
            <span className="tag">What we do</span>
            <span className="title">
              {" "}
              Emowering founders with non dilutive capital and excution
              expertise
            </span>
            <span className="desc">Here is how we can evaluate</span>
          </div>

          {/* 2 block cards */}
          <div className="wwd-blocks">

            {/*First block*/}
            <div className="wwd-block">
                <span className="sec-title"> Blue Advance</span>
                <span className="text">
                    Fund recurring growth expenses e.g. customer acquisition, inventory
                </span>

                {/* features inside the block */}
                <div className="block-features">
                    {
                        features.slice(0,3).map ((feature , i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="features" width={60} height={60} />
                                <span>{feature.title}</span>
                            </div>

                        ))               
                    }
                </div>
            </div>





            {/*second block*/}
            <div className="wwd-block">
                <span className="sec-title"> Blue Seed</span>
                <span className="text">
                    Fund one's offs to scale e.g. product, hiring
                </span>

                {/* features inside the block */}
                <div className="block-features">
                    {
                        features.slice(3,6).map ((feature , i)=> (
                            <div className="block-feature" key={i}>
                                <Image src={feature.icon} alt="features" width={60} height={60} />
                                <span>{feature.title}</span>
                            </div>

                        ))               
                    }
                </div>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
