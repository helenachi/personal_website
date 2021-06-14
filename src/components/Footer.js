import React from "react";
import { Pane, Text, majorScale } from "evergreen-ui";
import "./Footer.css";

function Footer() {
  return (
    <Pane className="footer-container">
      <ul className="footer-menu">
        <li>mail</li>
        <li>linkedin</li>
        <li>instagram</li>
        <li>github</li>
      </ul>
    </Pane>
  );
}

export default Footer;
