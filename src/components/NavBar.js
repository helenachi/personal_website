import React from "react"
// import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import path from "path"

function NavBar({ tabs }) {
  return (
    <div>
      <h1>NavBar</h1>
      {tabs.map(tab => (
        <p>{tab}</p>
      ))}
    </div>
  )
}

NavBar.propTypes = {
  tabs: PropTypes.array,
}

export default NavBar
