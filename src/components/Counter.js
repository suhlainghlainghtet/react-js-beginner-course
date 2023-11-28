import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(this.state.count)
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.incrementFive()}>Click</button>
      </div>
    );
  }
}
export default Counter;
