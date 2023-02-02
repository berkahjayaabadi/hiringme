import React from "react";

const InputFormCmpny = () => {
  return (
    <section className="flex-12 shadow-xl p-7 max-[375px]:w-[19rem] max-[465px]:w-[25rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem]">
      <h1 className="text-xl font-bold pb-1">Data Diri</h1>
      <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nama Perusahaan :</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Bidang :</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Domisili :</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <label className="label pt-8">
          <span className="label-text">Deskripsi Singkat</span>
        </label>
        <textarea
          type="text"
          class="input input-bordered w-full p-4 outline-pale h-20"
        />
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Instagram :</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Phone Number :</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full pt-8">
          <label className="label">
            <span className="label-text">Linkedin :</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button type="click" className="btn btn-warning mt-8">
          Simpan
        </button>
      </form>
    </section>
  );
};

export default InputFormCmpny;
