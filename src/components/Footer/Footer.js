import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

function Footer({ contacts }) {
  return (
    <div>
      <Link to="/">helena.</Link>
      <ul>
        {contacts.map(contact => (
          <li>
            <a href={contact.link}>
              <Img fixed={contact.imgSrc} />
              {/* <img src={contact.imgSrc} /> */}
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

export const query = graphql`
  query {
    file(relativePath: { eq: "../../../public/images/email_icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
