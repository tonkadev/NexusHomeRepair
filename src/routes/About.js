import '../About.css';

import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar2.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      {/* <div className="avatar-container">
        <Avatar
          alt="profile pic"
          variant="rounded"
          src={logo}
          style={{ width: "200px", height: "225px", margin: "0 auto" }}
        />
      </div> */}

      <div className="text-container">
        <p className="text">
          I am your local handyman in Northeast Mesa with experience in all sorts of home repair and improvement projects. 
           I enjoy helping people with their household needs and take pride in delivering high-quality workmanship. 
           Whether it's fixing a leaky faucet, installing new light fixtures, or painting a room, 
           I have the skills and knowledge to tackle any task efficiently and effectively. 
           My passion for problem-solving and attention to detail ensure that I can find creative solutions 
           to any home-related challenge. I am licensed, bonded and Insured so you can rest easy knowing 
           that your home repair and improvement projects are in safe and reliable hands, 
           with added protection against any unforeseen events or liabilities.


        </p>

      </div>

      {/* Rest of the code */}
    </div>
  );
}
