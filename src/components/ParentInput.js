import React, { Component } from "react";
import FcInput from "./FcInput";

class ParentInput extends Component {
  constructor(props) {
    super(props);

    this.parentRef = React.createRef();
  }
  handleClick = () => {
    this.parentRef.current.focus();
  };
  render() {
    return (
      <div>
        <FcInput ref={this.parentRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ParentInput;
