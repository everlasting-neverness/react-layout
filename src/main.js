import React from 'react';
import ReactDOM from 'react-dom';


class ContentHolder extends React.Component {
  render() {
    return (
      <div class="inside-block">
          <div class="hidden">
            <span class="group">
            <span class="likes"><img src="https://cdn.pixabay.com/photo/2017/06/24/20/27/heart-2438744__180.png" alt=""></span>
            <span class="">1</span>
            </span>
            <span class="group">
              <span class="comments"><img src="http://www.qartrock.com/wp-content/uploads/2017/04/111.png" alt=""></span>
              <span class="">10</span>
            </span>
          </div>
          <img src="https://saray.ru/i/00066591-0.jpg" alt=""></div>
    )
  }
}



function render() {
  ReactDOM.render(
    <div class="main-div">
      <ContentHolder />
    </div>,
    document.getElementById('root'),
  );
}

render();
