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
          <Link  to="/auth/github">
              <button className="btn btn-secondary">Login using Github</button>
          </Link>
          <p>{global.user}</p>
        </nav>
      </div>
    );
  }
};

Login.contextType = GlobalContext;
export default Login;