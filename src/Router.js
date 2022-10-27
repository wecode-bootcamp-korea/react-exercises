import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuTab from "./MenuTab/MenuTab";
import Monsters from "./Monsters/Monsters";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menuTab" element={<Monsters />} />
        <Route path="/" element={<MenuTab />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
