import React, {Component} from "react";
import Button from "../Button";
// import DropdownButton from 'react-bootstrap/DropdownButton';
import API from "../../utils/API";
import "./style.css";

// function StatusBar(props) {
//   console.log(props)
//   return (
//     <div>
//       <DropdownButton id="dropdown-basic-button" title="Job Status">
//         <DropdownButton.Item href="#/action-1">Job saved but not applied for</DropdownButton.Item>
//         <DropdownButton.Item href="#/action-2">Job applied for</DropdownButton.Item>
//         <DropdownButton.Item href="#/action-3">Job application processing</DropdownButton.Item>
//         <DropdownButton.Item href="#/action-4">Job application recieved</DropdownButton.Item>
//       </DropdownButton>
//     </div>
//   )
// }
class StatusBar extends Component {
  state = {
    selectedStatus: ""
  };

  handleSelect = event => {
    event.preventDefault();
    this.setState({selectedStatus: event.target.value})
      console.log("this is testing",this.state.selectedStatus)    
  };
  handleUpdateStatus = () =>{
    console.log("this is id", this.props.id)
    API.updateJobStatus(this.props.id, this.state.selectedStatus)
      .then((res)=>{
        console.log(res)
      })
      .catch(err =>console.log(err))
  }

  render() {
    return (
      <div>
      <div className= "status-bar">
        <select id="lang" onChange={this.handleSelect} value={this.state.selectedStatus}>
          <option value="Saved Not Applied">Not Applied</option>
          <option value="Applied">Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        </div>
        <Button className="btn" onClick={this.handleUpdateStatus}>Update Status</Button>
      </div>
    )
  }
}


 export default StatusBar;