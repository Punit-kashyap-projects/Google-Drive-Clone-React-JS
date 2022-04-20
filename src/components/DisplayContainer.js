import React from "react";
import list_view from "../pics/list_view.jpg";
import info from "../pics/info.png";
import "../css/DisplayContainer.css";
import DisplayCard from "./DisplayCard";

export default function DisplayContainer() {
  return (
    <>
      <div id="displayCont">
        <div id="displayInfoNav">
          <p>Heading</p>

          <button>
            <img src={list_view} alt="Reload page" className="opacity" />
          </button>

          <button>
            <img src={info} alt="Reload page" className="opacity" />
          </button>
        </div>

        <div id="contentDisplayer">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
      </div>
    </>
  );
}
