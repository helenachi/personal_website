import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
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
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Helena Chi <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={ click ? "fas fa-times" : "fas fa-bars" } />
          </div>
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
          {button && <Button buttonStyle="btn--outline">Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
