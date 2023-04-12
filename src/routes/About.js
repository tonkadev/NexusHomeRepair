import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar.png";

export default function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      <Avatar
        alt="profile pic"
        src={logo}
        style={{ width: "150px", height: "150px", margin: "0 auto" }}
      />

      <p
        style={{
          fontFamily: "Arial",
          fontSize: "28px",
          color: "blue",
          lineHeight: "1.5",
          maxWidth: "800px", // Set maximum width for text
          margin: "0 auto", // Center align text
          padding: "0 16px", // Add padding for better readability
          marginTop: "20px"
        }}
      >
        I am a licensed independent contractor providing quality handyman
        services to customers in N.E. Mesa and vicinity. Whether you need help
        with minor repairs or are looking to spruce up your living space, I've
        got you covered.
      </p>

      <style jsx>{`
        @media screen and (min-width: 1024px) {
          /* Styles for desktop screens */
          p {
            font-size: 32px; // Increase font size for desktop
          }
        }
      `}</style>
    </div>
  );
}
