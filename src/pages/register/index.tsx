import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RegisterAsync } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register(props: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { value, status, error = {} } = useAppSelector(
    (state: any) => state.auth
  );

  const handleLogin = () => {
    dispatch(
      RegisterAsync({
        name: name,
        email: email,
        password: password,
        status: true,
      })
    );
    navigate("/login");
  };

  useEffect(() => {
    if (value) {
      navigate("/login");
    }
  }, [value]);

  return (
    <React.Fragment>
      <div className="z-10 flex items-center justify-center my-10">
        <div className="p-12 mx-auto bg-white rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-purple-600">Sign In </h3>
            <p className="text-purple-900">Please sign in to your account.</p>
          </div>
          {error && status === "idle" ? (
            <p className="text-red-600">{error?.error.message}</p>
          ) : null}
          <div className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-medium tracking-wide text-purple-900">
                Name
              </label>
              <input
                className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                type="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="john"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium tracking-wide text-purple-900">
                Email
              </label>
              <input
                className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <label className="mb-5 text-sm font-medium tracking-wide text-purple-900">
                Password
              </label>
              <input
                className="content-center w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full p-3 my-2 font-semibold tracking-wide text-black text-indigo-500 transition duration-500 ease-in bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-black"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
