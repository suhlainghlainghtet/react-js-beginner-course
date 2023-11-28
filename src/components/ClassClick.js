import { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("Clicking...");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Class click</button>
      </div>
    );
  }
}
export default ClassClick;
