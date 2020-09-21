import React from "react"
// import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function NavBar({ tabs }) {
  return (
    <div>
      <Link to="/">helena.</Link>
      <ul>
        {tabs.map(tab => (
          <li>
            <Link to={"/" + tab}>{tab}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

NavBar.propTypes = {
  tabs: PropTypes.array,
}

export default NavBar
