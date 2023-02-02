import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeCompany,
  LandingPages,
  Login,
  HomeWorker,
  HireWorker,
  HireCompany,
} from "./pages";
import "./assets/css/index.css";
import { Editprofilework } from "./pages/editprofileworker/EditProfileWrk";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/homecompany" element={<HomeCompany />} />
        <Route path="/homeworker" element={<HomeWorker />} />
        <Route path="/hireworker" element={<HireWorker />} />
        <Route path="/hirecompany" element={<HireCompany />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/editprofilework" element={<Editprofilework />} />
        <Route path="/registworker" element={<RegistWorker />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
