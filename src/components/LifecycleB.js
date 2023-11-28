import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lifecycle B",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount = () => {
    console.log("Lifecycle B componentDidMount");
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("Lifecycle B shouldComponentUpdate");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Lifecycle B getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Lifecycle B componentDidUpdate");
  };

  render() {
    console.log("Lifecycle B render");
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default LifecycleB;
