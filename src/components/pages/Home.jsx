import React from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

function Home(props) {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
