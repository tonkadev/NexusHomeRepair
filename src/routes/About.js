import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../myAvatar2.png";

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
        I am a licensed independent contractor providing quality handyman
        services to customers in N.E. Mesa and vicinity. Whether you need help
        with minor repairs or are looking to spruce up your living space, I've
        got you covered.
      </p>

      <div
        style={{
          width: "100%", /* Set width to 100% to fill parent container */
          overflowX: "auto", /* Add horizontal scroll for smaller screens */
          maxWidth: "640px", /* Set max width to limit iframe size */
          margin: "0 auto" /* Center align the iframe */
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7DCQbJCwkXWqdDwB1ochVizVUlYjSXrbVtaQQ2pErM7pfbw/viewform?embedded=true"
          width="100%" /* Set width to 100% to fill parent container */
          height="959" /* Set height to a fixed value */
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      {/* Rest of the code */}
    </div>
  );
}
