import React from 'react'
import './Email.css'
import { LuMail } from "react-icons/lu";
const Email = () => {
  return (
    <div className="emailBox">
    
    {/* icon */}
    <div>
        <LuMail size ={40} />
    </div>

    {/*input*/}
    <input type="email" placeholder='Enter Email' />

    {/*get funded button*/}
    <div className="getFunded">
        Get Funded
    </div>
    </div>
  )
}

export default Email
