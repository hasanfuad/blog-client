import React from "react";
import { useLocation } from "react-router";
import "./SinglePost.css";

function SinglePost(props) {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="singlePost"
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Fuad</b>
          </span>
          <span className="singlePostDate">
            Date: <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sit
          suscipit cum facilis quos dolore quis fuga perspiciatis, repellat
          dolor delectus autem voluptatem illo, sapiente eos alias ullam! Ad,
          sapiente! dolor delectus autem voluptatem illo, sapiente eos alias
          ullam! Ad, sapiente! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Repellendus accusantium consectetur sapiente,
          officiis corrupti voluptatum et? Explicabo libero modi pariatur
          dignissimos, quisquam impedit, veritatis ea eos quaerat enim a
          expedita id ad mollitia esse fugiat suscipit laborum quod omnis
          exercitationem cumque fugit aperiam, vitae sed. Aperiam, magnam
          voluptate. Beatae, fuga! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Totam sit suscipit cum facilis quos dolore quis fuga
          perspiciatis, repellat dolor delectus autem voluptatem illo, sapiente
          eos alias ullam! Ad, sapiente! dolor delectus autem voluptatem illo,
          sapiente eos alias ullam! Ad, sapiente! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Repellendus accusantium consectetur
          sapiente, officiis corrupti voluptatum et? Explicabo libero modi
          pariatur dignissimos, quisquam impedit, veritatis ea eos quaerat enim
          a expedita id ad mollitia esse fugiat suscipit laborum quod omnis
          exercitationem cumque fugit aperiam, vitae sed. Aperiam, magnam
          voluptate. Beatae, fuga!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
