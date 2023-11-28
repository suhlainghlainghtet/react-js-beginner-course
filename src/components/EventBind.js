import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick() {
    this.setState({
      message: "Good Bye!",
    });
  }
  //   handlerClick = () => {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //   };

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        {/* <button onClick={this.handlerClick.bind(this)}>Event Bind</button> */}
        {/* <button onClick={this.handlerClick}>Event Bind</button> */}
        {/* <button onClick={() => this.handlerClick()}>Event Bind</button> */}
        <button onClick={this.handlerClick}>Event Bind</button>
      </div>
    );
  }
}

export default EventBind;
