import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar(props) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories/");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="myImg"
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
          ipsam nobis, optio facere architecto.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((catsName) => (
            <Link to={`/?cat=${catsName.name}`} className="link">
              <li className="sidebarListItem"> {catsName.name} </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
