import React, { useState } from "react";
import "./MenuTab.scss";

const MenuTab = () => {
  const [content, setContent] = useState();

  const handleClickList = (listContent) => setContent(listContent);
  return (
    <div className="menuTab">
      <h1 className="title">Menu Tab</h1>
      <ul className="tabs">
        {LIST.map((li) => (
          <li key={li.id} onClick={() => handleClickList(li.content)}>
            {li.content}
          </li>
        ))}
      </ul>
      <div className="contents">{content}</div>
    </div>
  );
};

export default MenuTab;

const LIST = [
  { id: 1, content: "First" },
  { id: 2, content: "Second" },
  { id: 3, content: "Third" },
];
