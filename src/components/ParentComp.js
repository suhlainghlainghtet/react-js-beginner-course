import React, { Component } from "react";
import MemoComp from "./MemoComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Su Su",
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ name: "Su Su" });
    }, 4000);
  };

  render() {
    console.log("Parent Component........................");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
