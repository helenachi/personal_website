import React from "react"
import Layout from "../components/Layout/Layout"
import PropTypes from "prop-types"

const EXPERIENCES = ["h4i", "filld", "codeREV Kids"]

function Experience() {
  return (
    <Layout>
      <div>
        {EXPERIENCES.map(exp => (
          <p>{exp}</p>
        ))}
      </div>
    </Layout>
  )
}

export default Experience
