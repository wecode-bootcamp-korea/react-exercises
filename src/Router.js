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

        {/* 동적라우팅 실습 */}
        <Route path="/monsters" element={<UrlParameters />} />
        {/* <Route path="/monsters/detail/" element={<MonsterDetail />} /> */}
        <Route path="/monsters/detail/:monsterId" element={<MonsterDetail />} />

        {/* 페이지네이션 실습 */}
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
      </Routes>
    </BrowserRouter>
  );
}
