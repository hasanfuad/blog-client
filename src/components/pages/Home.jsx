import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
