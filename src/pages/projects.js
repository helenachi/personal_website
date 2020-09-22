import React from "react"
import Layout from "../components/Layout/Layout"

const PROJECTS = ["happy hour", "sentiment classifier", "cut to the case"]
const EXPERIENCES = [
  {
    name: "Happy Hour",
    project_link: "https://github.com/helenachi/doable",
    org_name: "urspace labs",
    org_link: "https://labs.urspace.io/",
    blurb,
    location: "Remote",
    period: "Summer 2020",
  },
  {
    name: "a sentiment classifer",
    project_link: "https://github.com/helenachi/sentiment_analyzer",
    // org_name: "",
    // org_link: "",
    blurb,
    location: "Champaign, IL",
    period: "May 2019",
  },
  {
    name: "Philadelphia Reads Web App",
    project_link: "https://uiuc.hack4impact.org/projects/pr",
    org_name: "Hack4Impact UIUC",
    org_link: "https://uiuc.hack4impact.org/",
    blurb,
    location: "Champaign, IL",
    period: "Fall 2018",
  },
  {
    name: "Cut 2 the Case",
    project_link: "https://uiuc.hack4impact.org/projects/c2tc-1",
    org_name: "Hack4Impact UIUC",
    org_link: "https://uiuc.hack4impact.org/",
    blurb,
    location: "Champaign, IL",
    period: "Spring 2018",
  },
  {
    name: "Neighborhood News Bureau Interactive Map",
    project_link: "https://uiuc.hack4impact.org/projects/nnb-1",
    org_name: "Hack4Impact UIUC",
    org_link: "https://uiuc.hack4impact.org/",
    blurb,
    location: "Champaign, IL",
    period: "Fall 2017",
  },
]

const blurb_happy = (
  <p>
    where I developed a mobile app to encourage young professionals and students
    to work on their non-career goals a bit every day.
  </p>
)

const blurb_sentiment = (
  <p>
    something something it was my first real compling project, in which I
    cleaned and trained models data on movie reviews to determine the general
    sentiment on a test set of movie reviews. compared and contrasted the
    significance of accuracy, precision, and recall in different models,
    including SVN, bag-of-words, naive bayes, decision tree.
  </p>
)

const blurb_philareads = (
  <p>
    something something worked on creating dynamic quiz components for the web
    app.
  </p>
)

function Projects() {
  return (
    <Layout>
      <div>
        <h1>I've worked on...</h1>
        {PROJECTS.map(proj => (
          <p>{proj}</p>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
