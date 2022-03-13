import React, { useState } from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import './MenuTab.scss';

export default function MenuTab() {
  const [currentId, setCurrentId] = useState();

  const clickHandler = (id) => {
    setCurrentId(id);
  };

  return (
    <div className="wrapper">
      <ul className="tabs">
        {CATEGORY_ARR.map((category, index) => {
          return (
            <li
              key={category + index}
              className={category}
              onClick={() => clickHandler(index + 1)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="contents">{MAPPING_OBJ[currentId]}</div>
    </div>
  );
}

const MAPPING_OBJ = {
  1: <First />,
  2: <Second />,
  3: <Third />,
};

const CATEGORY_ARR = ['first', 'second', 'third'];
