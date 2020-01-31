import React from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import Auth from "../../utils/Auth"
import Nav from "../../components/Nav";

class Login extends React.Component { 
  state = {};
  
  
  handleLoginGithub = (res) => {
    window.location.href="./auth/github";
  }
  
  render() {
    
    const global = this.context;
    return (
      <div>
        <Nav/>
        <div className="container">
          <h1>Please Login Using the following Authentication</h1>
          {/* <a className="btn btn-secondary" href="/auth/github" onClick={this.handleLoginGithub}>Login with Github</a> */}
          <a className="btn btn-secondary"  onClick={this.handleLoginGithub}>Login with Github</a>
          <p>{global.user}</p>
        </div>
      </div>
    );
  }
};

Login.contextType = GlobalContext;
export default Login;