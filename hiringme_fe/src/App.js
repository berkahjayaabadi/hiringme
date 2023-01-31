import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LandingPages } from "./pages";
import './assets/css/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
