import React from "react";
import NavbaraftrLogin from "../../../components/NavbaraftrLogin/NavbaraftrLogin";
const HomeWorker = () => {
  return (
    <div>
      <NavbaraftrLogin />
      <header className="bg-secondary ">
        <section className="container max-w-5xl mx-auto">
          <h1 className="text-white font-extrabold text-start text-xl p-6">
            Berkah Jaya
          </h1>
        </section>
      </header>
      <main className="container max-w-5xl mx-auto flex flex-col mt-4 ">
        <section className="flex flex-row bg-white">
          <div className="basis-[70%] border-r-2 ">
            <form className="flex items-center m-1">
              <input
                type="text"
                className="w-full  p-3 rounded-lg shadow-lg"
                placeholder="Search....."
              />
            </form>
          </div>
          <div className="dropdown basis-[15%] text-center">
            <label
              tabIndex={0}
              className="btn bg-white shadow-lg border-white m-1 w-full text-text hover:bg-secondary hover:text-white"
            >
              ▼ Sort
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu  text-start shadow bg-base-100 rounded-lg w-52"
            >
              <li>
                <h1>Sortir berdasarkan Skill</h1>
              </li>
              <li>
                <h1>Sortir berdasarkan Freelance</h1>
              </li>
              <li>
                <h1>Sortir berdasarkan Fulltime</h1>
              </li>
            </ul>
          </div>
          <div className=" basis-[15%]">
            <button className="btn border-white bg-secondary hover:bg-white hover:text-text m-1 w-full">
              Search
            </button>
          </div>
        </section>
        <section className="mt-10 grid grid-cols-1 gap-7 p-3 mx-[1rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div className="card bg-base-100 shadow-xl  hover:cursor-pointer p-2">
              <figure>
                <img
                  className="h-28 w-28 shadow-xl mr-20 p-2"
                  src="https://placeimg.com/200/280/arch"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title">PT BERKAH JAYA ABADI</h2>
                <p>Financial</p>
                <p>🏠 London</p>
                <div className="flex flex-row justify-end px-4">
                  <h1 className="bg-primary rounded-lg  text-sm">
                    More Information ▷▷▷
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="self-center mt-4">
          <div className="btn-group ">
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-4">
              ◀
            </button>
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white marker:mx-1">
              1
            </button>
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
              2
            </button>
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
              3
            </button>
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
              4
            </button>
            <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-4">
              ▶
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeWorker;
