import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import "./Settings.css";

function Settings(props) {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="settingsProPic"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Fuad" />
          <label>Email</label>
          <input type="email" placeholder="fuad@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
