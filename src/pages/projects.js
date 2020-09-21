import React from "react"
import Layout from "../components/Layout/Layout"

const PROJECTS = ["happy hour", "sentiment classifier", "cut to the case"]

function Projects() {
  return (
    <Layout>
      <div>
        {PROJECTS.map(proj => (
          <p>{proj}</p>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
