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
import JobAccount from "./Pages/JobAccount";


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
            <ProtectedRoute exact path="/account" component={JobAccount} />
            {/* <Route exact path="*" component={()=>"404 NOT FOUND"} /> */}
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
