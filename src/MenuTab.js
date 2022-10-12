import React from 'react';
import './MenuTab.scss';

const MenuTab = () => {
  return (
    <div className="menuTab">
      <h1 className="title">Menu Tab</h1>
      <ul className="tabs">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
      <div className="contents">
        {/* 메뉴에 따른 데이터가 들어가야 할 부분 */}
      </div>
    </div>
  );
};

export default MenuTab;
