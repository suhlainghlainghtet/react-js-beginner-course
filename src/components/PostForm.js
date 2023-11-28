import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { id, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="id"
            value={id}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;
