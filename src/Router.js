import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Monsters from './Assignments/Monsters/Monsters';
// import Pagination from './Assignments/Pagination/Users';
// import UrlParameters from './Assignments/UrlParameters/Monsters';
// import MonsterDetail from './Assignments/UrlParameters/MonsterDetail';
// import StateProps from './Assignments/StateProps/StateProps';
// import MenuTab from './Assignments/MenuTab/MenuTab';
// import Lifecycle from './Assignments/LifeCycle';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monsters />} />
        {/* <Route path="/stateProps" element={<StateProps />} />
        <Route path="/menuTab" element={<MenuTab />} />
        <Route path="/monsters" element={<UrlParameters />} />
        <Route path="/monsters/detail/" element={<MonsterDetail />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/lifecycle" element={<Lifecycle />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
