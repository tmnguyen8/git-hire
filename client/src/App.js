import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Jobs} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/Jobs/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
