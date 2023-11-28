import React, { Component } from "react";

export class RefsComp extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (ele) => {
      this.cbRef = ele;
    };
  }
  componentDidMount = () => {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log("inputRef.......");
  };

  handleClick = () => {
    // alert(`${this.inputRef.current.value}`);
    alert(`${this.cbRef.value}`);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsComp;
