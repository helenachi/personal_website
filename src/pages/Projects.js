import React from "react";
import { Pane, Heading, Text, Card } from "evergreen-ui";
import "./Projects.css";

var projects = {
  "projects":[
    {
      "name":"Happy Hour",
      "affiliate":"urspace Labs",
      "description":"where I developed a mobile app to encourage young professionals and students to work on their non-career goals a bit every day.",
      "time":"Summer 2020"
    },
    {

    }
  ]
}

function Projects() {
  return (
    <Pane>
      <Heading>Here are some of the projects I've worked on...</Heading>
      <Pane>
        <Pane>
          <ul>
            <li>project 1</li>
            <li>project 2</li>
            <li>project 3</li>
          </ul>
        </Pane>
        <Card>
          description o f my projectshksuerhse
        </Card>
      </Pane>
    </Pane>
  );
}

export default Projects;