import React from "react";
import "../App.css";
import { Pane, Button } from "evergreen-ui";
import "./HeroSection.css";

function HeroSection() {
  return (
    <Pane className="hero-container">
      {/* <video src="https://www.youtube.com/watch?v=eZTS4cL4Euo" autoPlay loop muted/> */}
      <h1>Nice to meet you!</h1>
      <p>Feel free to browse around and get to know me :)</p>
      <Pane>
        <Button>IDK lol</Button>
      </Pane>
    </Pane>
  );
}

export default HeroSection;