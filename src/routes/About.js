import '../About.css';

import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar2.png";
import { Link } from "react-router-dom";
import me from "../myAvatar.png";

export default function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      { <div className="avatar-container">
  <Avatar
    alt="profile pic"
    variant="rounded"
    src={me}
    style={{ width: "150px", height: "150px", margin: "0 auto" }}
  />
</div>
 }

      <div className="text-container">
        <p className="text">
          I am a licensed contractor providing handyman services in Northeast Mesa (85215 and vicinity).  
          I have had experience with all sorts of home repair and improvement projects and 
          I enjoy helping people with their household needs. 
          My passion for problem-solving and attention to detail ensure that I can find creative solutions 
          to any home-related challenge and I take pride in delivering high-quality workmanship.

           Because I am licensed, bonded and Insured you can rest easy knowing 
           that your home repair and improvement projects are in safe and reliable hands, 
           with added protection against any unforeseen events or liabilities.


        </p>

      </div>

      {/* Rest of the code */}
    </div>
  );
}
