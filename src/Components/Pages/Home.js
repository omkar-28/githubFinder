import React, { Fragment } from "react";

import SearchBar from "../Layouts/SearchBar";
import Users from "../User/Users";

export const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <Users />
    </Fragment>
  );
};

export default Home;
