import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import GlobalContext from "./context/globalContext";
import Auth from "./utils/Auth";

class App extends React.Component {
  handleLogin = () => {
    console.log("user:", this.state.user)
    Auth.getFacebookAuth().then((res)=>{
      console.log(res.data)
    })
    
  };
  state = {
    user: false,
    login: this.handleLogin
  };
  render() {
    return (
      <Router>
        <GlobalContext.Provider value={this.state}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={User} />
            <ProtectedRoute exact path="/safe" component={User} />
          </Switch>
        </GlobalContext.Provider>
      </Router>
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
