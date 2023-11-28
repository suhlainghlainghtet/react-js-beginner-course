import React, { Component } from "react";
import { UserConsumer } from "./Content";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(text) => {
          return <h3>{text}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
