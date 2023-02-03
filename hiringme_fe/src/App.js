import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeCompany,
  LandingPages,
  Login,
  HomeWorker,
  HireWorker,
  HireCompany,
  EditProfileWrk,
  EditProfilCmpny,
} from "./pages";
import "./assets/css/index.css";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/homecompany" element={<HomeCompany />} />
          <Route path="/homeworker" element={<HomeWorker />} />
          <Route path="/hireworker" element={<HireWorker />} />
          <Route path="/hirecompany" element={<HireCompany />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/editprofilework" element={<EditProfileWrk />} />
          <Route path="/editprofilecompany" element={<EditProfilCmpny />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
