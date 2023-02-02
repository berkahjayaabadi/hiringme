import React from "react";
import Profilemini from "../../components/Profilemini/profilemini";
import NavbaraftrLogin from "../../components/NavbaraftrLogin/NavbaraftrLogin";
import InputFormWorker from "../../components/InputForm/InputFormWorker";
import Footer from "../../components/Footer/Footer";

const EditProfileWrk = () => {
  return (
    <>
      <NavbaraftrLogin />
      <section className="flex max-[965px]:flex-wrap gap-8 m-[8rem] justify-center">
        <section className="">
          <Profilemini />
        </section>
        <section className="p-5">
          <InputFormWorker />
        </section>
      </section>
        <Footer />
    </>
  );
};

export default EditProfileWrk;
