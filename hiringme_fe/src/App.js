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
  RegistWorker,
  RegistCompany,
} from "./pages";
import "./assets/css/index.css";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import ForgotPassword from "./pages/forgotPassword";

const App = () => {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/homecompany" element={<HomeCompany />} />
          <Route path="/homeworker" element={<HomeWorker />} />
          <Route path="/hireworker/:id" element={<HireWorker />} />
          <Route path="/hirecompany/:id" element={<HireCompany />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/editprofilework" element={<EditProfileWrk />} />
          <Route path="/editprofilecompany" element={<EditProfilCmpny />} />
          <Route path="/registworker" element={<RegistWorker />} />
          <Route path="/registcompany" element={<RegistCompany />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
