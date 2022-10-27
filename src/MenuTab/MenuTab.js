import React, { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./MenuTab.scss";

const MenuTab = () => {
  const [currentTab, setCurrentTab] = useState("First");

  return (
    <div className="menuTab">
      <h1 className="title">Menu Tab</h1>
      <ul className="tabs">
        {TAB_ARR.map((tab, index) => (
          <li key={index} onClick={() => setCurrentTab(tab)}>
            {tab}
          </li>
        ))}
      </ul>
      <div className="contents">{MAPPING_OBJ[currentTab]}</div>
    </div>
  );
};

export default MenuTab;

const TAB_ARR = ["First", "Second", "Third"];
const MAPPING_OBJ = {
  First: <First />,
  Second: <Second />,
  Third: <Third />,
};
