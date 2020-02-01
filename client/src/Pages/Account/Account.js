import React from "react";
import GlobalContext from "../../Context/globalContext";
import Nav from "../../components/Nav"; 

class Account extends React.Component {
  state = {};
  
  render() {
    const global = this.context;
  
    return (
      <div>
        <Nav/>
        
        
      </div>
      
    );
  }
}

// Account.contextType = GlobalContext;
export default Account;
