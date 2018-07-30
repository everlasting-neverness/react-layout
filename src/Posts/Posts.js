import React from "react";
import { posts } from "./posts-data.js";
import { Post } from "./post.js";

export class Posts extends React.Component {
  render() {
    let output = posts.map(post => {
      return (
        <Post likes={post.likes} comments={post.comments} img={post.img} />
      );
    });
    return output;
  }
}
