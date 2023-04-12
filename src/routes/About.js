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
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        I am a licensed independent contractor providing quality handyman
        services to customers in N.E. Mesa and vicinity. Whether you need help
        with minor repairs or are looking to spruce up your living space, I've
        got you covered.
      </p>

      <h2 style={{ textAlign: "center" }}>Request a Quote</h2>

      <form
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          placeholder="brief description of the Project"
          style={{ marginBottom: "16px", resize: "none", height: "100px" }}
        ></textarea>
        <input
          type="text"
          placeholder="Your Name"
          style={{ marginBottom: "16px" }}
        />
        <input
          type="email"
          placeholder="Customer Email Address"
          style={{ marginBottom: "16px" }}
        />
        <input
          type="tel"
          placeholder="Contact Phone Number"
          style={{ marginBottom: "16px" }}
        />
        <button type="submit" style={{ alignSelf: "center" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
