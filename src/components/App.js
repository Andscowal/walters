import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import Return from "./Return";
import "../App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Return />
          <h1 className="named">Andrew Walters</h1>
          <h2 className="job">React Developer</h2>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route
              render={() => {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
