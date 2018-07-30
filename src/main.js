import React from "react";
import ReactDOM from "react-dom";

let objects = [
  {
    likes: 1,
    comments: 10,
    img: "https://saray.ru/i/00066591-0.jpg"
  },
  {
    likes: 17,
    comments: 180,
    img:
      "http://bazakartin.ru/wp-content/uploads/2015/08/tulpani-rozovie-kvadr-min.jpg"
  },
  {
    likes: 1,
    comments: 10,
    img: "https://i10.fotocdn.net/s8/219/gallery_m/323/2241675994.jpg"
  },
  {
    likes: 16,
    comments: 210,
    img:
      "http://wallpapersdig.com/images/preview/Snow-Mountain-Wallpaper-8473-Hd-Wallpapers-Nature-66944.jpg"
  },
  {
    likes: 14,
    comments: 310,
    img: "https://cdn-img.jamendo.com/albums/s92/92946/covers/1.600.jpg"
  },
  {
    likes: 167,
    comments: 120,
    img:
      "https://s3.amazonaws.com/kmpz-p/images/i441120-7726765815279396409.jpg"
  },
  {
    likes: 21,
    comments: 12,
    img:
      "https://image1ws.indotrading.com/s3/productimages/co30890/s10268/w600-h600/a4c83126-a5cf-4465-b7b2-2a83bf6d97bfw.jpg"
  },
  {
    likes: 42,
    comments: 150,
    img:
      "https://cdn-img.jamendo.com/albums/s56/56931/covers/1.600.jpg?du=1500992307"
  },
  {
    likes: 31,
    comments: 150,
    img: "http://nabeel911.com/wp-content/uploads/ildikoneerdreamland4.jpeg"
  },
  {
    likes: 36,
    comments: 150,
    img:
      "http://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/biz/2015/11/27/Image-%2837%29.jpg"
  }
];

class ContentHolder extends React.Component {
  render() {
    let output = objects.map(obj => {
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
              <span className="">{obj.likes}</span>
            </span>
            <span className="group">
              <span className="comments">
                <img
                  src="http://www.qartrock.com/wp-content/uploads/2017/04/111.png"
                  alt=""
                />
              </span>
              <span className="">{obj.comments}</span>
            </span>
          </div>
          <img src={obj.img} alt="" />
        </div>
      );
    });
    return output;
  }
}

class Footer extends React.Component {
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

function render() {
  ReactDOM.render(
    <div className="main-div">
      <div className="content-holder">
        <ContentHolder />
      </div>
      <Footer />
    </div>,
    document.getElementById("root")
  );
}

render();
