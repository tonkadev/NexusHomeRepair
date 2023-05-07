import '../About.css';

import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar2.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      <div className="avatar-container">
        <Avatar
          alt="profile pic"
          variant="rounded"
          src={logo}
          style={{ width: "200px", height: "225px", margin: "0 auto" }}
        />
      </div>

      <div className="text-container">
        <p className="text">
          Hi, my name is Rudy. I am a licensed contractor and provider of skilled handyman services to customers in N.E. Mesa and the surrounding area. 
         
        </p>
        <p className="text">
        
          I am committed to providing top-notch service and ensuring that your home improvement and repair projects are completed efficiently and to your satisfaction.
        </p>
        <p className="text">
          I understand the importance of having a reliable handyman who can take care of your maintenance needs, and I am dedicated to providing excellent customer service, a timely response, and competitive pricing. 
          Whether you need help with minor repairs or major renovations, I have the expertise and tools to get the job done right. 
        </p>
        <p className="text">
          I take pride in serving the Mesa community and look forward to working with you. 
          Please don't hesitate to contact me with any questions or to schedule an appointment. 
          Thank you for considering my handyman services.
        </p>
      </div>

      {/* Rest of the code */}
    </div>
  );
}
