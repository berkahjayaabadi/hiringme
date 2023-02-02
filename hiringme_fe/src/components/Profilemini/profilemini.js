import { React, useState, useEffect } from "react";
import axios from "axios";

const Profilemini = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl max-[375px]:w-[19rem] max-[465px]:w-[25rem] sm:w-[28rem]">
        <form>
          <figure className="p-10 flex-col gap-2">
            <img
              src={require("../../assets/images/christopher-campbell.jpg")}
              alt="Shoes"
              className="rounded-full w-[10rem] h-[10rem]"
            />

            <label className="block">
              <span className="sr-only">Halo</span>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-pale hover:file:font-bold"
              />
            </label>
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Christopher</h2>
            <h3>Web Developer</h3>
            <h3>Freelance</h3>
            <span>Alamat</span>
            <span>089232543124</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <div className="items-center card-actions flex-col">
              <button className="btn btn-primary  text-white  w-[100%]">
                Ubah Password
              </button>
              <button className="btn btn-primary  outline-secondary bg-white text-secondary hover:bg-white w-[100%]">
                Kembali
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profilemini;
