import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

export default function MenuTab() {
  return (
    <div className="wrapper">
      <ul className="tabs">
        <li className="first">First</li>
        <li className="second">Second</li>
        <li className="third">Third</li>
      </ul>
      <div className="contents">
        <First />
      </div>
    </div>
  );
}
