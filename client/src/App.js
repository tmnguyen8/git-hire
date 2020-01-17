import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

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

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGithubJobs(this.state.jobTitle, this.state.jobLocation)
      .then(res => {
        this.setState({ jobs: res.data })
        console.log(this.state.jobs)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
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
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
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
                <RecipeList>
                  {this.state.jobs.map(job => {
                    return (
                      <RecipeListItem
                        key={job.id}
                        title={job.title}
                        href={job.url}
                        description={job.description}
                        thumbnail={job.company_logo}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
