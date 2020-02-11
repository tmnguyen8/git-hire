import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import placeholderImage from "../../images/notfoundlogo.png";
import Button from "../Button";
import API from "../../utils/API";
// import StatusBar from "../StatusBar";
// import DropdownButton from "react-bootstrap/DropdownButton";
import "./style.css";


// Exporting both JobList and JobListItem from this file
// JobList renders a bootstrap list item
export function JobList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function isEmpty (obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
          return false;
      }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

export function jobSaveButtonClick(svdJobData) {
  const localhostUser = JSON.parse(localStorage.getItem("user"))

  if (!isEmpty(localhostUser) && localhostUser!==null) {

    API.getSavedJobByID(localhostUser.username, svdJobData.id)
      .then((res)=>{
        if (res.data.id !== svdJobData.id) {
          API.postSavedJob(svdJobData)
          .then(()=>{
            alert(`Job ${svdJobData.title} is added to favorite`)
          })
          .catch(err=>console.log(err))
        } else {
          alert("You have already saved this job!")
        }
      })
      .catch(err=>console.log(err))
  } else {
    alert("Please login first to save job.")
  }
}

// JobListItem renders a bootstrap list item containing data from the recipe api call
export function JobListItem({
  thumbnail = placeholderImage,
  title,
  company,
  location, 
  description,
  salary,
  url,
  id,
  provider,
  company_logo
}) {

  if (JSON.parse(localStorage.getItem('user'))===null) {
    var username = null
  } else {
    var username = JSON.parse(localStorage.getItem('user')).username
  }
  

  const svdJobData = {
    thumbnail,
    title,
    company,
    location, 
    description,
    salary,
    url,
    id,
    username,
    provider,
    company_logo
  }

  return (
    <li className="list-group-item">
      <Container>
        <Row>

          <Col size="xs-2 sm-2">
            <Thumbnail src={company_logo? company_logo:thumbnail} />

          </Col>
          <Col size="xs-7 sm-7">
            <h3>{title}</h3>
            <div>Provider: {provider}</div>
            <div>Company: {company}</div>
            <div>Location: {location}</div>
            <div className="description-text"> {description? `Description: ${description}`: null} </div>
            <div> {salary? `Salary: ${salary}`: null} </div>
            <a rel="noreferrer noopener" target="_blank" href={url}>
              Go to job!
            </a>
          </Col>
          <Col size="xs-3 sm-3">
            <Button className= "btn-lg custom-button" key={id} onClick={()=> jobSaveButtonClick(svdJobData)}>Save</Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
