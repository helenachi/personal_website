import React from "react"
import Layout from "../components/Layout/Layout"

const blurb_h4i = (
  <p>
    where I worked on a team with 5-6 other students to create software tools
    for nonprofit clients, such as
    <a href="https://www.facebook.com/cut2thecase/" target="_blank">
      Cut 2 the Case
    </a>
    ,
    <a href="https://www.philareads.org/" target="_blank">
      Philadelphia Reads
    </a>
    ,
    <a href="https://www.nnbnews.com/" target="_blank">
      Neighborhood News Bureau
    </a>
    . I worked with tools such as ReactJS, Redux, Firebase, Flask for web
    application solutions.
  </p>
)

const blurb_filld = (
  <p>
    where I translated UI mock-ups into mobile frontend for Filld's React Native
    app and implemented internationalisation for their React web product.
  </p>
)

const blurb_coderev = (
  <p>
    where I taught courses for Unity and Roblox game development and Arduino
    robotics to elementary and middle schoolers.
  </p>
)

const EXPERIENCES = [
  {
    position: "software engineer",
    company: "Hack4Impact UIUC",
    company_link: "https://uiuc.hack4impact.org/",
    blurb: blurb_h4i,
    location: "Champaign, IL",
    period: "2017-2019",
  },
  {
    position: "software intern",
    company: "Filld",
    company_link: "https://filld.com/",
    blurb: blurb_filld,
    location: "Mountain View, CA",
    period: "Summer 2018",
  },
  {
    position: "camp instructor and co-director",
    company: "CodeREV Kids",
    company_link: "https://www.coderevkids.com/",
    blurb: blurb_coderev,
    location: "Mountain View",
    period: "Summer 2019",
  },
]

function Experience() {
  return (
    <Layout>
      <div>
        <h1>I've been a ...</h1>
        <ul>
          {EXPERIENCES.map(exp => (
            <p>{exp.position}</p>
          ))}
        </ul>
        {EXPERIENCES.map(exp => (
          <div>
            <p>
              at{" "}
              <a href={exp.company_link} target="_blank">
                {exp.company}
              </a>
            </p>
            {exp.blurb}
            <div>{exp.location + " " + exp.period}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Experience
