import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    // if (this.state.isLoggedin) {
    //   return <div>Welcome to Myanmar</div>;
    // } else {
    //   return <div>Bye Bye</div>;
    // }

    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome to Myanmar</div>;
    // } else {
    //   message = <div>Bye Bye</div>;
    // }
    // return <div>{message}</div>;

    // return this.state.isLoggedin && <div>Welcome to Myanmar</div>;

    return this.state.isLoggedin ? (
      <div>Welcome to Myanmar</div>
    ) : (
      <div>Bye Bye</div>
    );
  }
}

export default UserGreeting;
