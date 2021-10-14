import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-github-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <div className="topListItem">HOME</div>
          <div className="topListItem">ABOUT</div>
          <div className="topListItem">CONTACT</div>
          <div className="topListItem">WRITE</div>
          <div className="topListItem">LOGOUT</div>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="topImg"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
