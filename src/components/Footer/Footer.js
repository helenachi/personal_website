import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function Footer({ contacts }) {
  return (
    <div>
      <Link to="/">helena.</Link>
      <ul>
        {contacts.map(contact => (
          <li>
            <a href={contact.link}>
              <img src={contact.imgSrc} width="50" height="50" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Footer.propTypes = {
  contacts: PropTypes.array,
}

export default Footer
