import React from "react";
import { Pane} from "evergreen-ui";
import "../App.css";
import HeroSection from "../components/HeroSection"

function Home() {
  return (
    <Pane>
      <HeroSection/>
      <p>this is my home page</p>
    </Pane>
  );
}

export default Home;