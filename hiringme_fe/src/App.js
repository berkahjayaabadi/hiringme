import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LandingPages } from "./pages";
import "./assets/css/index.css";
import { Editprofilework } from "./pages/editprofileworker/EditProfileWrk";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPages />} />
        <Route path="/editprofilework" element={<Editprofilework/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
