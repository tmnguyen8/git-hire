import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "./utils/API";
// import { JobList, JobListItem } from "./components/JobList";
// import { Container, Row, Col } from "./components/Grid";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Box } from "@material-ui/core";

class App extends Component {
  // state = {
  //   jobs: [],
  //   jobTitle: "",
  //   jobLocation: ""
  // };

  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleGithubSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getGithubJobs(this.state.jobTitle, this.state.jobLocation)
  //     .then(res => {
  //       this.setState({ jobs: res.data });
  //       console.log(this.state.jobs);
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleIndeedSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getIndeedJobs(this.state.jobTitle, this.state.jobLocation)
  //     .then(res => {
  //       this.setState({ jobs: res.data });
  //       console.log(this.state.jobs);
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleMonsterSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getMonsterJobs(this.state.jobTitle, this.state.jobLocation)
  //     .then(res => {
  //       this.setState({ jobs: res.data });
  //       console.log(this.state.jobs);
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleUSAJobsSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getUSAJobs(this.state.jobTitle, this.state.jobLocation)
  //     .then(res => {
  //       // console.log("response data",res)
  //       this.setState({ jobs: res.data });
  //       // console.log(this.state.jobs)
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleGlassdoorSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   console.log(this.state.jobTitle);
  //   API.getGlassdoorJobs(this.state.jobTitle)
  //     .then(res => {
  //       console.log("response data", res.data);
  //       this.setState({ jobs: res.data });
  //       // console.log(this.state.jobs)
  //     })
  //     .catch(err => console.log(err));
  // };

  // // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  // handleSimplyhiredSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.jobTitle);
  //   API.getSimplyhiredJobs(this.state.jobTitle, this.state.jobLocation)
  //     .then(res => {
  //       console.log("response data", res.data);
  //       this.setState({ jobs: res.data });
  //       // console.log(this.state.jobs)
  //     })
  //     .catch(err => console.log(err));
  // };

  state = {
    user: false
  };
  handleGlobalState = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div>
        <Router>
          <>
            <Nav user={this.state.user} />
            <Box pt={3}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/login"
                  render={() => (
                    <Login handleGlobalState={this.handleGlobalState} />
                  )}
                />
              </Switch>
            </Box>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
