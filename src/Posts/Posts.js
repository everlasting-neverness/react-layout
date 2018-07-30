import React from "react";
import { posts } from "./posts-data.js";

export class Posts extends React.Component {
  render() {
    let output = posts.map(post => {
      return (
        <div className="inside-block">
          <div className="hidden">
            <span className="group">
              <span className="likes">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/24/20/27/heart-2438744__180.png"
                  alt=""
                />
              </span>
              <span className="">{post.likes}</span>
            </span>
            <span className="group">
              <span className="comments">
                <img
                  src="http://www.qartrock.com/wp-content/uploads/2017/04/111.png"
                  alt=""
                />
              </span>
              <span className="">{post.comments}</span>
            </span>
          </div>
          <img src={post.img} alt="" />
        </div>
      );
    });
    return output;
  }
}
