import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      skills: "",
    };
  }
  handleNameChage = (e) => {
    this.setState({ userName: e.target.value });
  };
  handleCommentChage = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSkillsChage = (e) => {
    this.setState({ skills: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.userName} ${this.state.comment} ${this.state.skills}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleNameChage}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChage}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label>skills</label>
          <select value={this.state.skills} onChange={this.handleSkillsChage}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
