import React, { Component } from "react";
// import Jumbotron from "../Jumbotron";
// import Nav from "../Nav";
import Input from "../Input";
import Button from "../Button";
import API from "../../utils/API";
import { JobList, JobListItem } from "../JobList";
import { Container, Row, Col } from "../Grid";
// import Checkbox from "../Checkbox"; 
import "./style.css";
import PartnerWheel from "../PartnerWheel";

class Search extends Component {
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

  
  handleSearch = (event) =>{
    this.setState({jobs: []})

    event.preventDefault();
    
    // GITHUB JOBS
    API.getGithubJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
    // SIMPLYHIRED JOBS
    API.getSimplyhiredJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
    // Indeed JOBS
    API.getIndeedJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
    // MONSTER JOBS
    API.getMonsterJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
    // USA JOBS
    API.getUSAJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
    // GLASSDOOR JOBS
    API.getGlassdoorJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        var joined = this.state.jobs.concat(res.data);
        this.setState({ jobs: joined })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="search-container"> 
        <PartnerWheel/>
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
                      {/* HANDLE ALL SEARCH API */}
                      <Button
                      onClick={this.handleSearch}
                      type="success"
                      className="btn btn-secondary"
                      >
                        Search Jobs
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row >
            <div >
              <Col size="xs-12" >
              {/* Beginning of Job List Display */}
              {!this.state.jobs.length ? (
                <div></div>
              ) : (
                <JobList>
                  {this.state.jobs.map(job => {
                    return (
                      <JobListItem
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        url={job.url}
                        company={job.company}
                        description={job.description}
                        thumbnail={job.company_logo}
                        location={job.location}
                        salary={job.salary}
                        provider={job.provider}
                        company_logo={job.company_logo}
                      />
                    );
                  })}
                </JobList>
              )}
              </Col>
            </div>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
