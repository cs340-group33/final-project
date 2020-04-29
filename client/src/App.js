import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Dashboard from "./components/Dashboard";
import Theaters from "./components/Theaters";
import Managers from "./components/Managers";
import Movies from "./components/Movies";
import Screens from "./components/Screens";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/managers">
          <Managers/>
        </Route>
        <Route path="/theaters">
          <Theaters/>
        </Route>
        <Route path="/screens">
          <Screens/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/">
          <SplashPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;