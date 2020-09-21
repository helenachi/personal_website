import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const NAV_TABS = ["experience", "projects", "about", "fun"]
const CONTACTS = [
  {
    link: "mailto:helenachi001@gmail.com",
    imgSrc: "../../../public/images/email_icon.png",
    // imgSrc: "public/email_icon.png",
  },
  {
    link: "http://linkedin.com/in/helena-chi",
    imgSrc: "../../../public/images/linkedin_icon.png",
  },
  {
    link: "https://github.com/helenachi",
    imgSrc: "../../../public/images/github_icon.png",
  },
  {
    link: "https://instagram.com/hungryflamingcat",
    imgSrc: "../../../public/images/instagram_icon.png",
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

// Layout.children = {
//   experiences: PropTypes.array,
// }

export default Layout
