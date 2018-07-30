import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="icons">
          <span className="icon icon-vk" />
          <span className="icon icon-fb" />
          <span className="icon icon-t" />
          <span className="icon icon-G" />
        </div>
        <div className="logo">
          <img
            className="logo-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png"
            alt=""
          />
          <div className="logo-text">The Verstka</div>
        </div>
      </div>
    );
  }
}
