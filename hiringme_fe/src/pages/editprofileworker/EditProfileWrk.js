import React from "react";
import Profilemini from "../../components/Profilemini/profilemini";
import NavbaraftrLogin from "../../components/NavbaraftrLogin/NavbaraftrLogin";
import InputFormWorker from "../../components/InputForm/InputFormWorker";

export function Editprofilework() {
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
    </>
  );
}
