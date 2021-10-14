import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

function Posts(props) {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
