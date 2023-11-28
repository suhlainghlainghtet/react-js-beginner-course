import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Myanmar",
    };
  }
  changeTextMessage() {
    this.setState({
      message: "Thanks for visiting",
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeTextMessage()}>Submit</button>
      </div>
    );
  }
}
export default Message;
