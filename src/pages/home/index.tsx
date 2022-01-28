import logo from "../../assets/logo/logo.svg";
import tableLogo from "../../assets/img/tableLogo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(props: any) {
  const [search, setSearch] = useState("");

  return (
    <div className="container w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="container flex flex-col flex-wrap items-center pt-24 mx-auto md:pt-36 md:flex-row">
          <div className="flex flex-col justify-center w-full overflow-y-hidden xl:w-2/5 lg:items-start">
            <h1 className="my-4 text-3xl font-bold leading-tight text-center text-white opacity-75 md:text-5xl md:text-left">
              {/* button link to search page */}
              <Link to="/search">
                <button className="px-4 py-2 font-semibold text-indigo-500 bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white hover:border-transparent">
                  Find
                  <br />
                </button>
              </Link>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                &nbsp;Your Favorite Restaurant.
              </span>
            </h1>
          </div>
          <div className="w-full p-12 overflow-hidden xl:w-3/5">
            <img
              className="w-full mx-auto transition duration-700 ease-in-out transform md:w-4/5 -rotate-6 hover:scale-105 hover:rotate-6"
              src={tableLogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
