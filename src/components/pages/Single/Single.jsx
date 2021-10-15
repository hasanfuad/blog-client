import React from "react";
import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";
import "./Single.css";

function Single(props) {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
