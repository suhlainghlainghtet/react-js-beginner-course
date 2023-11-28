import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("Regular Component#########");
    return (
      <div>
        <h2>Regular Component - {this.props.name}</h2>
      </div>
    );
  }
}
