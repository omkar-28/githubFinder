import React, { Component, Fragment } from "react";
import Navbars from "./Components/Layouts/Navbars";
import "./App.css";
import { fetchedUser } from "./api";
import Users from "./Components/User/Users";
import Footer from "./Components/Layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { fetchUserDetails } from "./api";
import User from "./Components/User/User";
import SearchBar from "./Components/Layouts/SearchBar";

class App extends Component {
  state = {
    users: [],
    user: {},
    Loading: false,
    text: "",
    Clear: false,
  };

  componentDidMount = async () => {
    this.setState({ Loading: true });
    const fetchUsers = await fetchedUser();

    this.setState({
      users: fetchUsers,
      Loading: false,
    });
  };

  inputHandler = async (text) => {
    this.setState({ Loading: true, Clear: true });
    const fetchUsers = await fetchedUser(text);
    this.setState({
      users: fetchUsers,
      Loading: false,
    });
  };

  clearSearch = async () => {
    const fetchUsers = await fetchedUser();

    this.setState({
      users: fetchUsers,
      Loading: false,
      Clear: false,
    });
  };

  getUser = async (login) => {
    this.setState({ Loading: true });
    const fetchedDetail = await fetchUserDetails(login);

    this.setState({
      user: fetchedDetail,
      Loading: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbars title="Github Finder" icon="fa fa-github" />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <SearchBar
                    inputHandler={this.inputHandler}
                    clear={this.state.Clear}
                    clearSearch={this.clearSearch}
                  />
                  <Users users={this.state.users} Loader={this.state.Loading} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={this.state.user}
                  loading={this.state.Loading}
                />
              )}
            />
          </Switch>

          <Footer title="Github Finder" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
