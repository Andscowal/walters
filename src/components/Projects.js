import React, { Component } from "react";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">My Projects</h1>
        <div className="projects">
          <div className="prj">
            <img src={require("../img/aus.jpeg")} />
            <div className="text">Coming Soon</div>
          </div>
          <div className="prj">
            <img src={require("../img/comp.jpeg")} />
            <div className="text">Coming Soon</div>
          </div>
          <div className="prj">
            <img src={require("../img/fall.jpg")} />
            <div className="text">Coming Soon</div>
          </div>
          <div className="prj">
            <img src={require("../img/flower.jpeg")} />
            <div className="text">Coming Soon</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

//TODO Need to set up a grid of images that will overlay and link to the project in the image (no actual link until project completion, just random images for right now)
