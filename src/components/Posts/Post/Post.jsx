import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="postImg"
      />

      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro
          doloribus nam numquam itaque voluptatem aut repellat accusamus ullam?
          Saepe commodi tenetur eligendi similique minima, officia ab magni?
          Sunt, nisi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Odit porro doloribus nam numquam itaque voluptatem aut repellat
          accusamus ullam? Saepe commodi tenetur eligendi similique minima,
          officia ab magni? Sunt, nisi? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Odit porro doloribus nam numquam itaque voluptatem
          aut repellat accusamus ullam? Saepe commodi tenetur eligendi similique
          minima, officia ab magni? Sunt, nisi? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Odit porro doloribus nam numquam itaque
          voluptatem aut repellat accusamus ullam? Saepe commodi tenetur
          eligendi similique minima, officia ab magni? Sunt, nisi? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Odit porro doloribus nam
          numquam itaque voluptatem aut repellat accusamus ullam? Saepe commodi
          tenetur eligendi similique minima, officia ab magni? Sunt, nisi?
        </p>
      </div>
    </div>
  );
}

export default Post;
