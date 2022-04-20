import React from "react";
import icon from "../pics/drive_icon.png";
import search from "../pics/search.png";
import filters from "../pics/filters.png";
import interrogation from "../pics/interrogation.png"
import settings from "../pics/settings.png"
import list from "../pics/list.png";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href='/'>
              <div id="icon">
                <img src={icon} alt="Reload page" />
                <p>Drive</p>
              </div>
            </a>
          </li>

          <li>
            <div id="searchBar">
              <button>
                <img src={search} alt="Reload page" className="opacity" />
              </button>
              <input type="text" placeholder="Search in Drive" />
              <button>
                <img src={filters} alt="Reload page" className="opacity" />
              </button>
            </div>
          </li>

          <li>
            <div id="navOptions">
                <button><img src={interrogation} alt='Reload page' className="opacity"/></button>
                <button><img src={settings} alt='Reload page' className="opacity"/></button>
                <button><img src={list} alt='Reload page' className="opacity"/></button>
                <button><img src={filters} alt='Reload page' className="opacity"/></button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
