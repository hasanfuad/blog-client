import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Fuad's Personal</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="myImg"
        className="headerImg"
      />
    </div>
  );
}

export default Header;
