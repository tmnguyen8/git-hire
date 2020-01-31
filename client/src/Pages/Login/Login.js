import React from "react";
import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";

class Login extends React.Component { 
  state = {};
  
  render() {
    
    const global = this.context;
    return (
      <div>
        <nav>
          <a  href="/auth/github">
              <button className="btn btn-secondary">Login using Github</button>
          </a>
          <p>{global.user}</p>
        </nav>
      </div>
    );
  }
};

Login.contextType = GlobalContext;
export default Login;