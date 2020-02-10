import React from "react";
// import { Link, Redirect, NavLink } from 'react-router-dom'
import GlobalContext from "../../Context/globalContext";
import Auth from "../../utils/Auth"
import Nav from "../../components/Nav";
import "./login.css"

class Login extends React.Component { 
  // constructor( props ){
  //   super( props );
  //   this.handleLoginGithub = this.handleLoginGithub.bind(this);
  //   this.login = this.login.bind(this);
  //   this.getAccount = this.getAccount.bind(this);
  // }
  
  state = {
    user: false
  };

  // Redirect to auth/github
  handleLoginGithub = function() {
    // console.log('login test')
    window.location.href="./auth/github";
  }
  
  // Get the account when /auth/github/profile is hit
  getAccount = function() {
      Auth.getGithubAccount().then((res)=>{
          this.setState({user: res.data})
          console.log(this.state.user)
          console.log(this.isEmpty(res.data))
          if (!(this.isEmpty(res.data))) {
              localStorage.setItem('user', JSON.stringify(this.state.user))
          } 
      }).then(()=>{
          if(localStorage.getItem('user')) {
              // console.log("local storage has user")
              window.location.href="/account";
          } else {
              // console.log("no local storage user")
              window.location.href="/login";
          }
      })
    }

  // Check if the object is empty
  isEmpty = (obj) =>{
      for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return JSON.stringify(obj) === JSON.stringify({});
  }
  
  // handleLoginGithub = function() {
  //   this.login()
  // }

  render() {
    // const global = this.context;
    return (
      <div>
        <Nav/>
        <div className="container">
          <h1>Please Login Using the following Authentication</h1>
          <button className="btn btn-primary"  onClick={this.handleLoginGithub.then(this.getAccount)}>Login with Github</button>
        </div>
      </div>
    );
  }
};

// Login.contextType = GlobalContext;
// export default Login;


function LoginContext() {
  return (
    <GlobalContext.Consumer>
      {state=>(
        <div className="container login-container">
          <h4>Please Login using the following Authentication Steps</h4>
          <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/github-logo.png" alt="github logo"/>
          
          <div className="list-group login-list">
              <button
                className="btn btn-primary list-group-item list-group-item-action active"
                onClick={state.handleGithubLogin}
              >
                Step 1: Login with Github
              </button>

              <button
                className="btn btn-primary list-group-item list-group-item-action"
                onClick={state.getAccount}
              >
                Step 2: Get Github Profile
              </button>
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  )
}

export default LoginContext;