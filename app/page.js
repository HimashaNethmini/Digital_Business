"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Whatwedo from "@/src/components/Whatwedo/Whatwedo";
import OurDifference from "@/src/components/OurDifference/OurDifference";
import { motion, useAnimation } from "framer-motion";
import Howitworks from "@/src/components/Howitworks/Howitworks";
import Whoweinvest from "@/src/components/Whoweinvest/Whoweinvest";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";

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
      <Howitworks />

      {/*wrapping our difference page with animation to change colour smoothly */}

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }

        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <Whoweinvest />
      </motion.div>
      
      <Testimonials />
      <Footer />

    </motion.div>
  );
}
