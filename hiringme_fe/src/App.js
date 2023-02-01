import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LandingPages, Login } from "./pages";
import './assets/css/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPages />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
