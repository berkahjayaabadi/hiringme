import React from "react";
import "../../../assets/css/index.css";
import Profilemini from "../../../components/Profilemini/profilemini";
import NavbaraftrLogin from "../../../components/NavbaraftrLogin/NavbaraftrLogin";
import InputFormWorker from "../../../components/InputForm/InputFormWorker";
import Footer from "../../../components/Footer/Footer";

const EditProfileWrk = () => {
  return (
    <>
      <body className="background">
        <NavbaraftrLogin />
        <section className="flex max-[965px]:flex-wrap gap-8 m-[8rem] justify-center">
          <section className="">
            <Profilemini />
          </section>
          <section className="p-5 bg-white rounded-xl">
            <InputFormWorker />
          </section>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default EditProfileWrk;
