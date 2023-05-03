import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar2.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      <Avatar
        alt="profile pic"
        variant="rounded"
        src={logo}
        style={{ width: "325px", height: "360px", margin: "0 auto" }}
      />

      <p
        style={{
          fontFamily: "Arial",
          fontSize: "26px",
          color: "blue",
          lineHeight: "1.5",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        My name is Rudy, I am a licensed contractor providing skilled handyman services to customers in N.E. Mesa and vicinity. 
        I am committed to providing top-notch service and ensuring that your home improvement and repair projects are completed efficiently and to your satisfaction.
        I understand the importance of having a reliable handyman who can take care of your maintenance needs,
        and I am dedicated to providing excellent customer service, timely response, and competitive pricing. 
        Whether you need help with minor repairs or major renovations, I have the expertise and tools to get the job done right. 
        I take pride in serving the Mesa community and look forward to working with you. 
        Please don't hesitate to contact me with any questions or to schedule an appointment. 
        Thank you for considering my handyman services.
      </p>


      {/* Rest of the code */}
    </div>
  );
}
