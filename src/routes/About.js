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
          fontSize: "28px",
          color: "blue",
          lineHeight: "1.5",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        I am a licensed contractor providing quality handyman
        services to customers in N.E. Mesa and vicinity. Whether you need help
        with minor repairs or are looking to spruce up your living space, I've
        got you covered.
      </p>


      {/* Rest of the code */}
    </div>
  );
}
