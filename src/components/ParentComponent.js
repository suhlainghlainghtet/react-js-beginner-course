import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: "Parent",
    };
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(child) {
    alert(`Hello, ${this.state.parent} from ${child} `);
  }

  render() {
    return (
      <div>
        <ChildComponent handlerClick={this.handlerClick} />
      </div>
    );
  }
}

export default ParentComponent;
