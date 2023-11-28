import { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h3>Welcome to Class Component...</h3>
        <h4>
          Name: {name} age: {age}
        </h4>
      </div>
    );
  }
}
export default Welcome;
