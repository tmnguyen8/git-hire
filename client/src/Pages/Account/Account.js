import React from "react";
import GlobalContext from "../../Context/globalContext";
import Nav from "../../components/Nav"; 
import Profile from "../../components/Profile";

class Account extends React.Component {
  state = {};
  
  render() {

    const global = this.context;
  
    return (
      <div>
        <Nav/>
        <Profile />
      </div>
      
    );
  }
}

// Account.contextType = GlobalContext;
export default Account;
