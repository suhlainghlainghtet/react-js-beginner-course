import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
