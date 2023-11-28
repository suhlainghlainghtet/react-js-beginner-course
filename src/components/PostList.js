import axios from "axios";
import React, { Component } from "react";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.data;
      this.setState({
        posts: data,
      });
    } catch (error) {
      console.log("Error..", error);
    }
  };

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
  }
}

export default PostList;
