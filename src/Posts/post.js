import React from "react";

export class Post extends React.Component {
  render() {
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
            <span className="">{this.props.likes}</span>
          </span>
          <span className="group">
            <span className="comments">
              <img
                src="http://www.qartrock.com/wp-content/uploads/2017/04/111.png"
                alt=""
              />
            </span>
            <span className="">{this.props.comments}</span>
          </span>
        </div>
        <img src={this.props.img} alt="" />
      </div>
    );
  }
}
