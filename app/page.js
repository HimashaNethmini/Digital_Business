"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Whatwedo from "@/src/components/Whatwedo/Whatwedo";
import OurDifference from "@/src/components/OurDifference/OurDifference";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();
  
  //homepage
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <Whatwedo />

      {/*wrapping our difference page with animation to change colour smoothly */}

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }

        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDifference />
      </motion.div>
    </motion.div>
  );
}
