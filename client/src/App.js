import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { JobList, JobListItem } from "./components/JobList";
import { Container, Row, Col } from "./components/Grid";
import Checkbox from "./components/Checkbox"; 

class App extends Component {
  state = {
    jobs: [],
    jobTitle: "",
    jobLocation: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleGithubSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGithubJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        this.setState({ jobs: res.data })
        console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };

  handleIndeedSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getIndeedJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        this.setState({ jobs: res.data })
        console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };

  handleZiprecruiterSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getZiprecruiterJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        this.setState({ jobs: res.data })
        console.log(this.state.jobs)
        console.log("response data", res.data)
      })
      .catch(err => console.log(err));
  };

  handleMonsterSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getMonsterJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        this.setState({ jobs: res.data })
        console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };

  handleUSAJobsSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getUSAJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        // console.log("response data",res)
        this.setState({ jobs: res.data })
        // console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };
  
  handleGlassdoorSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log(this.state.jobTitle)
    API.getGlassdoorJobs(this.state.jobTitle)
      .then(res => {
        console.log("response data",res.data)
        this.setState({ jobs: res.data })
        // console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };
  
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  handleSimplyhiredSubmit = event => {
    event.preventDefault();
    console.log(this.state.jobTitle)
    API.getSimplyhiredJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        console.log("response data",res.data)
        this.setState({ jobs: res.data })
        // console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Checkbox/>       
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="jobTitle"
                        value={this.state.jobTitle}
                        onChange={this.handleInputChange}
                        placeholder="Job Title"
                      />
                      <Input
                        name="jobLocation"
                        value={this.state.jobLocation}
                        onChange={this.handleInputChange}
                        placeholder="Location"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      {/* Search in Github */}
                      <Button
                        onClick={this.handleGithubSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search Github
                      </Button>
                      {/* Search in SimplyHired */}
                      <Button
                        onClick={this.handleSimplyhiredSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search SimplyHired
                      </Button>
                      {/* Search in Indeed */}
                      <Button
                        onClick={this.handleIndeedSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search Indeed
                      </Button>
                      {/* Search in Monster */}
                      <Button
                        src="./images/monsterlogo.png" 
                        onClick={this.handleMonsterSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search Monster
                      </Button>

                      {/* Search in USAJobs */}
                      <Button
                        onClick={this.handleUSAJobsSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search USA Jobs
                      </Button>

                      {/* Search in Glassdoor */}
                      <Button
                        onClick={this.handleGlassdoorSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search Glassdoor
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.jobs.length ? (
                <h1 className="text-center">No Jobs to Display</h1>
              ) : (
                <JobList>
                  {this.state.jobs.map(job => {
                    return (
                      <JobListItem
                        key={job.id}
                        title={job.title}
                        href={job.url}
                        company={job.company}
                        description={job.description}
                        thumbnail={job.company_logo}
                        location={job.location}
                        salary={job.salary}
                      />
                    );
                  })}
                </JobList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
