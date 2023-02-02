import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LandingPages,Login,EditProfilCmpny,EditProfileWrk } from "./pages/index";

import "./assets/css/index.css";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPages />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/editprofilework" element={<EditProfileWrk />} />
        <Route path="/editprofilecompany" element={<EditProfilCmpny />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
