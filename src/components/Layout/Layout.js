import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

import EmailIcon from "../../../public/images/email_icon.png"
import LinkedinIcon from "../../../public/images/linkedin_icon.png"
import GithubIcon from "../../../public/images/github_icon.png"
import InstagramIcon from "../../../public/images/instagram_icon.png"

const NAV_TABS = ["experience", "projects", "about", "fun"]
const CONTACTS = [
  {
    link: "mailto:helenachi001@gmail.com",
    imgSrc: EmailIcon,
  },
  {
    link: "http://linkedin.com/in/helena-chi",
    imgSrc: LinkedinIcon,
  },
  {
    link: "https://github.com/helenachi",
    imgSrc: GithubIcon,
  },
  {
    link: "https://instagram.com/hungryflamingcat",
    imgSrc: InstagramIcon,
  },
]

function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <NavBar tabs={NAV_TABS} />
      {children}
      <Footer contacts={CONTACTS} />
    </div>
  )
}

export default Layout
