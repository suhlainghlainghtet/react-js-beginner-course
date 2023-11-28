import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./Content";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h3>{this.context}</h3>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
