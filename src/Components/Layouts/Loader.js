import React, { Fragment } from "react";

export const Loader = () => {
  return (
    <Fragment>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Loading...
      </h1>
    </Fragment>
  );
};

export default Loader;
