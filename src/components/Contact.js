import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Contact Me</h1>
          If you have a project or you'd just like to say hi, you can do so via
          social media or through email!
        </div>
        <div className="col-wrap">
          <div className="left">
            <ul>
              <h3>Social:</h3>
              <li>
                <a href="https://facebook.com/andrew.walters.169">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com/andscowal">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com/andscowal">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/andscowal">Github</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <h3>Email me:</h3>
              <a href="mailto:hello@aswalters.com">hello@aswalters.com</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
