import React from "react";
import InputFormCmpny from "../../components/InputFormCmpny/InputFormCmpny";
import NavbaraftrLogin from "../../components/NavbaraftrLogin/NavbaraftrLogin";
import NavbarBfrLogin from "../../components/NavbarbfrLogin/NavbarBfrLogin";
import Profilemini from "../../components/Profilemini/profilemini";
import "../../assets/css/index.css";
import Footer from "../../components/Footer/Footer";

const EditProfilCmpny = () => {
  return (
    <>
      <section className="background">
        <NavbaraftrLogin />
        <section className="flex max-[965px]:flex-wrap gap-8 m-[8rem] justify-center">
          <section className="">
            <Profilemini />
          </section>
          <section className="p-5">
            <InputFormCmpny />
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default EditProfilCmpny;
