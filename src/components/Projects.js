import React, { Component } from "react";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">My Projects</h1>
        <div className="projects">
          <div className="prj">
<<<<<<< HEAD
            <img src={require("../img/github-battle.png")} />
            <div className="text">
              <a href="https://github-battle-78b78-3d20f.firebaseapp.com/">
                Github Battle
              </a>
            </div>
          </div>
          <div className="prj">
            <img src={require("../img/js-drums.png")} />
            <div className="text">
              <a href="https://andscowal.github.io/js-drums/">
                JavaScript Drums
              </a>
            </div>
          </div>
          <div className="prj">
            <img src={require("../img/js-clock.png")} />
            <div className="text">
              <a href="https://andscowal.github.io/js-clock/">
                JavaScript Clock
              </a>
            </div>
          </div>
          <div className="prj">
            <img src={require("../img/fall.jpg")} />
=======
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
>>>>>>> 102bea4f3faeafddd254fbc6d191f03327f501d2
            <div className="text">Coming Soon</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

//TODO Need to set up a grid of images that will overlay and link to the project in the image (no actual link until project completion, just random images for right now)
