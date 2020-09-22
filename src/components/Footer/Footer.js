import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function Footer({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li>
            <a href={contact.link}>
              <img src={contact.imgSrc} width="35" height="35" />
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
