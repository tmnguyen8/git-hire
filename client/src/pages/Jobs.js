import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Jobs extends Component {
  state = {
    jobs: [],
    title: "",
    location: "",
  };

  // componentDidMount() {
  //   this.loadJobs();
  // }

  // loadJobs = () => {
  //   API.getJobs()
  //     .then(res =>
  //       this.setState({ Jobs: res.data, jobs: "", title: "", location: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteJobs = id => {
  //   API.deleteJobs(id)
  //     .then(res => this.loadJobs())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.location) {
  //     API.saveJobs({
  //       title: this.state.title,
  //       location: this.state.location,
  //     })
  //       .then(res => this.loadJobs())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What job should I apply for ?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Job Title (Required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="Location"
                placeholder="Location (Required)"
              />
             
              <FormBtn
                disabled={!(this.state.location && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Jobs On My List</h1>
            </Jumbotron>
            {this.state.title.length ? (
              <List>
                {this.state.Jobs.map(title => (
                  <ListItem key={title._id}>
                    <Link to={"/Jobs/" + title._id}>
                      <strong>
                        {Jobs.title} by {Jobs.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJobs(title._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jobs;
