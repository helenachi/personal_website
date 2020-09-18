import React from "react"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar tabs={["experience", "projects", "about", "fun"]} />
      Hello world!
    </div>
  )
}
