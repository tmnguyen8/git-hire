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
import Home from "./pages/Home";
import User from "./pages/Account";
import Login from "./pages/Login";
import GlobalContext from "./Context/globalContext";
import Auth from "./utils/Auth";
import Nav from "./components/Nav"

class App extends React.Component {

  handleGithubLogin = () => {
    console.log("user:", this.state.user)
    Auth.getGithubAuth().then((res)=>{
      console.log(res)
    })
  };
  state = {
    user: false,
    getAccount: this.handleGithubLogin
  };
  render() {
    return (
      <div>
       
        <Router>
        <GlobalContext.Provider value={this.state}> 
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>>
            <Route exact path="/user" component={User} />
            <ProtectedRoute exact path="/safe" component={User} />
          </Switch>
        </GlobalContext.Provider>
      </Router>
      </div>
      

    );
  }
}
export default App;

function ProtectedRoute({ component: Component, ...rest }) {
  console.log()
  return (
    <GlobalContext.Consumer>
      {({ user }) => (
        <Route
          {...rest}
          render={() => (user ? <Component /> : <Redirect to="/" />)}
        />
      )}
    </GlobalContext.Consumer>
  );
}
