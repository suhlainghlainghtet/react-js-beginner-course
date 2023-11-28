import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lifecycle A",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount = () => {
    console.log("Lifecycle A componentDidMount");
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Lifecycle A componentDidUpdate");
  };
  handleChangestate = () => {
    this.setState({ name: "Success" });
  };

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <h3>{this.state.name}</h3>
        <LifecycleB />
        <button onClick={this.handleChangestate}>Change State</button>
      </div>
    );
  }
}

export default LifecycleA;
