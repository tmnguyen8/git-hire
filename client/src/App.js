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
import Nav from "./components/Nav";
import "./App.css";
// import JobAccount from "./Pages/JobAccount";


class App extends React.Component {

  

  // Route to Github Authentication Route
  handleGithubLogin = (res) => {
    window.location.href="./auth/github"
    
  };

  // Route to Github to Logout and clear date client and server sides
  handleGithubLogout = () =>{
    Auth.logoutGithub()
      .then(()=>{
        this.setState({user: false})
        localStorage.removeItem("user")
      })
      .then(()=>{
        window.location.href="/login"
      })
      .catch(err=>console.log(err))
  };

  // Getting Github Account information
  getAccount = () =>{
      // console.log(this.state.user)
      // console.log((this.isEmpty(this.state.user)))
      Auth.getGithubAccount()
        .then((res)=>{
          this.setState({user: res.data})
          localStorage.setItem("user", JSON.stringify(this.state.user))
          console.log(this.state.user)
        })
        .then(()=>{
          if (this.state.user && (this.isEmpty(this.state.user))){
            window.location.href="/login"
            // this.props.history.push('/account')
            // return <Redirect to="/account"/>
          } else {
            window.location.href="/account"
            // return <Redirect to="/login"/>
          }
        })
        .catch(err=>console.log(err))
  };

  // Check if the object is empty
  isEmpty = (obj) =>{
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  
  state = {
    user: false,
    handleGithubLogin: this.handleGithubLogin,
    handleGithubLogout: this.handleGithubLogout,
    getAccount: this.getAccount,
    favJobList: []
  };
  render() {
    return (

      <Router>
        <GlobalContext.Provider value={this.state}> 
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/account" component={Account} />
            <Route exact path="/auth/github" component={Login} />
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
    <GlobalContext.Consumer>
      {({ user }) => (
        
        <Route
          {...rest}
          render={() => (user ? <Component /> : <Redirect to="/login" />)}
        />
      )}
    </GlobalContext.Consumer>

    // MY PROTECTED ROUTE
    // <Route 
    //   {...rest}
    //   render={props =>{
    //     if(localStorage.getItem('user')) {
    //       return <Component {...props}/>
    //     } else {
    //       return (<Redirect to={{
    //         pathname:"/login",
    //         state:{
    //           from: props.location
    //         }
    //       }}/>
    //       )
    //     }
    //   }}
    // />
  );
}
