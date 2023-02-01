import React from 'react'

const InputFormCmpny = () => {
  return (
    <section className="flex-12 shadow-xl p-7">
        <h1 className="text-xl font-bold pb-1">Data Diri</h1>
        <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Nama Lengkap :</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full pt-8">
            <label className="label">
              <span className="label-text">Job Desk :</span>
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
          <div className="flex max-[765px]:flex-wrap pt-8 gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Instagram</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Github</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Gitlab</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <label className="label pt-8">
            <span className="label-text">Deskripsi Singkat</span>
          </label>
          <textarea
            type="text"
            class="input input-bordered w-full p-4 outline-pale h-20"
          />
          <button type="click" className="btn btn-warning mt-8">
            Simpan
          </button>
        </form>
      </section>
  )
}

export default InputFormCmpny