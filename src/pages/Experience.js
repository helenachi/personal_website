import React from "react";
import { Pane, Heading, Text, Card } from "evergreen-ui";
import "./Experience.css";

var work_exp = {
  "work_exp":[
    {
      "status":"current", 
      "title":"Software Engineer", 
      "company":"TechSmith Corporation",
      "description": "where I work on ____ on the Snagit Windows team.",
      "location":"Okemos, MI",
      "time":"Nov 2020 - present"
    },
    {
      "status":"past", 
      "title":"Software Intern", 
      "company":"Filld",
      "description": "where I translated UI mockups and implemented internationalization for frontend components for Filld's mobile app with React Native and Firebase",
      "location":"Mountain View, CA",
      "time":"Summer 2018"
    },
    {
      "status":"past", 
      "title":"Coding Camp Instructor", 
      "company":"CodeREV Kids",
      "description": "where I ttaught courses for Arduino robotics as well as Unity and Roblox game development to elementary and middle school students.",
      "location":"Mountain View, CA",
      "time":"Summer 2019"
    }
  ]
};

function Experience() {
  return (
    <Pane>
      <Heading>Intro here based on work_exp item status</Heading>
      <Pane>
        <Pane>
          Here is where the job positions will go
        </Pane>
        <Card>
          And here will be the details of the job positions I've held before
        </Card>
      </Pane>
    </Pane>
  );
}

export default Experience;