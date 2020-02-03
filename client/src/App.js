// -----------------PAT-----------------
// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// // import Input from "./components/Input";
// // import Button from "./components/Button";
// import API from "./utils/API";
// import { JobList, JobListItem } from "./components/JobList";
// import { Container, Row, Col } from "./components/Grid";
// import Checkbox from "./components/Checkbox"; 
// import color from "@material-ui/core/colors/amber";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login"

// class App extends Component {

//   // This keeps the user login state at false, so they would have to either sign up or login
  
//   state = {
//     user: false
//   };
//   handleGlobalState = (key, value) => {
//     this.setState({ [key]: value });
// -----------------PAT-----------------
// -----------------PAT-----------------
//       <div>
//         <nav>
//           <Router>
//             <Route exact path="/" component= {Home} ></Route>
//             {/* <Route exact path="/login" component = {Login} ></Route> */}
//           </Router>
//             </nav>
//       </div>
// -----------------PAT-----------------
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import GlobalContext from "./Context/globalContext";
import Auth from "./utils/Auth";
// import Nav from "./components/Nav";

class App extends React.Component {

  handleGithubLogin = () => {
    console.log("user:", this.state.user)
    Auth.loginGithub().then((res)=>{
      return res.data
    })
  };
  state = {
    user: false,
    handleGithubLogin: this.handleGithubLogin
  };
  render() {
    return (

      <Router>
        <GlobalContext.Provider value={this.state}> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            {/* <Route exact path="/account" component={Account} /> */}
            <Route exact path="/auth/github" component={Home} />
            <ProtectedRoute exact path="/account" component={Account} />
            <Route exact path="*" component={()=>"404 NOT FOUND"} />
          </Switch>
        </GlobalContext.Provider>
      </Router>
    );
  }
}
export default App;

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    // <GlobalContext.Consumer>
    //   {({ user }) => (
    //     <Route
    //       {...rest}
    //       render={() => (user ? <Component /> : <Redirect to="/account" />)}
    //     />
    //   )}
    // </GlobalContext.Consumer>
    <Route 
      {...rest}
      render={props =>{
        if(localStorage.getItem('user')) {
          return <Component {...props}/>
        } else {
          return (<Redirect to={{
            pathname:"/login",
            state:{
              from: props.location
            }
          }}/>
          )
        }
      }}
    />
  );
}
