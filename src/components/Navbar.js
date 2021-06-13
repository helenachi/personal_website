import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Pane, Text, majorScale, CrossIcon, MenuIcon } from "evergreen-ui";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // allows site to render one time and not show up anymore
  useEffect(() => {
    showButton([]);
  });
  
  window.addEventListener("resize", showButton);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Pane className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Helena Chi
          </Link>
          <Pane className="menu-icon" onClick={handleClick}>
            { click ? <CrossIcon size={24} color="white" /> : <MenuIcon size={24} color="white" /> }
          </Pane>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>Contact Me</Link>
            </li>
          </ul>
          { button && <Button>Contact Me</Button>}
        </Pane>
      </nav>
    </>
  );
}

export default Navbar;
