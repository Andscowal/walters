import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading"> About Me </h1>
        <blockquote>
          {" "}
          Hello! My name is Andrew Walters, and I'm a goal-oriented,
          mission-driven Front End Web Developer with proficiencies in HTML5,
          CSS3, Javascript and I enjoy developing with React and Redux!
        </blockquote>
        I have a passion for learning new things and I am devoted to making
        things that make a difference! I am prior military, so I understand the
        importance of best practices and efficient work flows, and I can't wait
        to show you what an asset I could be to your team!
        <div className="col-wrap">
          <ul className="langs">
            <h3>Languages:</h3>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
          <ul className="skills">
            <h3>Qualities:</h3>
            <li>Self-Motivated</li>
            <li>Communicative</li>
            <li>Great Time Management</li>
            <li>Curious Mind</li>
            <li>Excellent Workflow</li>
          </ul>
        </div>
        <div className="afterbout">
          I am a web developer working out of San Diego, CA, but I was born and
          raised in Washington (State!) so I bleed 12th Man! I have a knack for
          picking things up really quickly, which is perfect because it allows
          me to spend time with my family when I'm not coding! Some things I
          like to do in my spare time vary all the way from spending a sunny day
          on the beach, to spending a rainy day playing video games. And I find
          myself always learning new technologies, so staying current is never
          an issue! If you value a great work ethic, and innovative minds,
          you're the type of team I'd love to be a part of!{" "}
          <a href="http://jsrxn.com">Check out my blog</a> to see what I can
          bring to your team or project! So, if you believe you could use me on
          a project or just want to say hi, I'd love to{" "}
          <a href="mailto:andscowal@gmail.com">hear from you!</a>
          <div>
            <h3>
              I'm only seeking telecommuting opportunities at this time. Thank
              you for your consideration!{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
