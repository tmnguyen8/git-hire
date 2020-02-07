import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';

function StatusBar({ type = "default"}) {
  return (
  <button className="dropdown-button">
<DropdownButton id="dropdown-basic-button" title="Job Status">
  <DropdownButton.Item href="#/action-1">Job saved but not applied for</DropdownButton.Item>
  <DropdownButton.Item href="#/action-2">Job applied for</DropdownButton.Item>
  <DropdownButton.Item href="#/action-3">Job application processing</DropdownButton.Item>
  <DropdownButton.Item href="#/action-4">Job application receieved</DropdownButton.Item>
</DropdownButton>
</button>
)
  }

 export default StatusBar;