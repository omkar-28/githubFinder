import React from "react";
import Navbars from "./Components/Layouts/Navbars";
import "./App.css";
import Footer from "./Components/Layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import User from "./Components/User/User";
import GithubState from "./Context/GithubState";
import PageNotFound from "./Components/Pages/PageNotFound";

import Home from "./Components/Pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <GithubState>
        <Router>
          <Navbars title="Github Finder" icon="fa fa-github" />
          <Switch>
            <Route exact path="/githubFinder" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/user/:login" component={User} />
            <Route component={PageNotFound} />
          </Switch>

          <Footer title="Github Finder" />
        </Router>
      </GithubState>
    </React.Fragment>
  );
};

export default App;
