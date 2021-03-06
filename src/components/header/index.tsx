import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props: any) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState("");
  useEffect(() => {
    setIsLogged(localStorage.getItem("token") || "");
  }, []);
  return (
    <div className="container w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <a
          className="flex items-center pt-5 text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl"
          href="/"
        >
          Scout
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            food
          </span>
        </a>
        {/* logout */}
        <div className="flex items-center">
          {localStorage.getItem("token") ? (
            <button
              className="px-4 py-2 my-4 font-semibold text-indigo-500 bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white hover:border-transparent"
              disabled={isLogged ? false : true}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 mx-2 my-4 font-semibold text-indigo-500 bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white hover:border-transparent"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
              <button
                className="px-4 py-2 mx-2 my-4 font-semibold text-indigo-500 bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white hover:border-transparent"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
