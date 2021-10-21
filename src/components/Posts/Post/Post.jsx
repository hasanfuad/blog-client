import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post({ post }) {
  const publicFolder = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={publicFolder + post.photo} alt="" />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.updatedAt).toDateString()}
        </span>
        <p className="postDescription">{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
