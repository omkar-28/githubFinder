import React, { Component } from "react";

export default class Boundries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>
          Something went wrong
        </h1>
      );
    }

    return this.props.children;
  }
}
