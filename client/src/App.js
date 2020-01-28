import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "./utils/API";
import { JobList, JobListItem } from "./components/JobList";
import { Container, Row, Col } from "./components/Grid";
import Checkbox from "./components/Checkbox"; 
import color from "@material-ui/core/colors/amber";
import Home from "./Pages/Home";
import Login from "./Pages/Login"

class App extends Component {

  // This keeps the user login state at false, so they would have to either sign up or login
  
  state = {
    user: false
  };
  handleGlobalState = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div>
        <nav>
          <Router>
            <Route exact path="/" component= {Home} ></Route>
            {/* <Route exact path="/login" component = {Login} ></Route> */}
          </Router>
            </nav>
      </div>
    );
  }
}

export default App;
