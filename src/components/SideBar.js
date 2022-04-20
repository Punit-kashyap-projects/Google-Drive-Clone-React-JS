import React from "react";
import icon from "../pics/drive_icon.png";
import drive from "../pics/myDrive.png";
import computers from "../pics/computers.png";
import shared from "../pics/shared.png";
import recent from "../pics/recent.png";
import starred from "../pics/starred.png";
import trash from "../pics/trash.png";
import cloud from "../pics/cloud.png";
import google from "../pics/google.png";
import "../css/SideBar.css";

export default function SideBar() {
  return (
    <>
      <div id="sideBar">
        <button id="linkBtn">
          <img src={icon} alt="Reload page" />
          <p>New</p>
        </button>

        <div id="sideBarOpt">
          <div className="sideBarOptions">
            <img src={drive} alt="Reload page" className="opacity" />
            <h3>My drive</h3>
          </div>

          <div className="sideBarOptions">
            <img src={computers} alt="Reload page" className="opacity" />
            <h3>Computers</h3>
          </div>

          <div className="sideBarOptions">
            <img src={shared} alt="Reload page" className="opacity" />
            <h3>Shared with me</h3>
          </div>

          <div className="sideBarOptions">
            <img src={recent} alt="Reload page" className="opacity" />
            <h3>Recent</h3>
          </div>

          <div className="sideBarOptions activeSideOpt">
            <img src={starred} alt="Reload page" className="opacity" />
            <h3>Starred</h3>
          </div>

          <div className="sideBarOptions">
            <img src={trash} alt="Reload page" className="opacity" />
            <h3>Trash</h3>
          </div>
        </div>

        <div id="storageInfo">
          <div className="sideBarOptions">
            <img src={cloud} alt="Reload page" className="opacity" />
            <h3>Storage</h3>
          </div>

          <div className="sideBarOptions">
            <div id="storageLoader">
              <div id="preLoader"></div>
            </div>
          </div>

          <div id="storageNumericalInfo">
            <p>190 GB of 300 GB Used</p>
          </div>

          <button id="buyStorage">Buy storage</button>
        </div>

        <div id="sponsor">
          <p>Product by</p>
          <img src={google} alt='Reload page'/>
        </div>
      </div>
    </>
  );
}
