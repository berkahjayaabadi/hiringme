import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword, Home, LandingPages,Login, RegistWorker } from "./pages";
import "./assets/css/index.css";
import { Editprofilework } from "./pages/editprofileworker/EditProfileWrk";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/editprofilework" element={<Editprofilework />} />
        <Route path="/registworker" element={<RegistWorker />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
