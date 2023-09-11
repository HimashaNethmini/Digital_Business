import React from 'react'
import './Email.css'
import { LuMail } from "react-icons/lu";
import { easeOut, motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animations';

const Email = () => {


  return (
    <motion.div
    initial={{
      width: ".5rem",
      borderRadius: "100%",
    }} 
    whileInView={{
      width: "70%",
      borderRadius: "999px",
      transition: {
        type: "easeOut",
        duration: 1,
      },
    }}
    className="emailBox">
    
    {/* icon */}
    <motion.div
    variants={containerVariants(0.6)}
    initial="offscreen"
    whileInView={"onscreen"}
    viewport={{
      once: true  /*run the animation when it's first time in the screen*/
    }}>

        <LuMail size ={40} />
    </motion.div>

    {/*input*/}
    <motion.input
     variants={containerVariants(0.6)}
     initial="offscreen"
     whileInView={"onscreen"}
     viewport={{
       once: true  /*run the animation when it's first time in the screen*/
     }}
     type="email" placeholder='Enter Email' />

    {/*get funded button*/}
    <motion.div
    variants={containerVariants(0.6)}
    initial="offscreen"
    whileInView={"onscreen"}
    viewport={{
      once: true  /*run the animation when it's first time in the screen*/
    }}
    className="getFunded"> Get Funded</motion.div>

    </motion.div>
  )
}

export default Email
