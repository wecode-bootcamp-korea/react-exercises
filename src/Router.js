import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Monsters from "./Assignments/Monsters/Monsters";
import Pagination from "./Lectures/Pagination/Users";
import UrlParameters from "./Lectures/UrlParameters/Monsters";
import MonsterDetail from "./Lectures/UrlParameters/MonsterDetail";
import StateProps from "./Lectures/StateProps/StateProps";
import MenuTab from "./Lectures/MenuTab/MenuTab";
import Lifecycle from "./Lectures/LifeCycle";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monsters />} />
        <Route path="/stateProps" element={<StateProps />} />
        <Route path="/menuTab" element={<MenuTab />} />
        <Route path="/monsters" element={<UrlParameters />} />
        <Route path="/monsters/detail/" element={<MonsterDetail />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
      </Routes>
    </BrowserRouter>
  );
}
