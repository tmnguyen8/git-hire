import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both JobList and JobListItem from this file

// JobList renders a bootstrap list item
export function JobList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// JobListItem renders a bootstrap list item containing data from the recipe api call
export function JobListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  company,
  location, 
  description,
  salary,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <div>Company: {company}</div>
            <div>Location: {location}</div>
           <div> {description? `Description: ${description}`: null} </div>
            <div>Salary: {salary}</div>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to job!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
