import React from "react";
import ReactDOM from "react-dom";
import { Posts } from "./Posts/Posts.js";
import { Footer } from "./Footer/Footer.js";

function render() {
  ReactDOM.render(
    <div className="main-div">
      <div className="content-holder">
        <Posts />
      </div>
      <Footer />
    </div>,
    document.getElementById("root")
  );
}

render();
