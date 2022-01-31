import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginAsync } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login(props: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { value, status, error = {} } = useAppSelector(
    (state: any) => state.auth
  );

  const handleLogin = () => {
    dispatch(
      loginAsync({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (value) {
      navigate("/");
    }
  }, [value]);

  return (
    <React.Fragment>
      <div className="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
        <div className="flex-col self-start hidden text-white lg:flex">
          <h1 className="mb-3 text-5xl font-bold">Hi 👋 Welcome Back</h1>
        </div>
      </div>
      <div className="z-10 flex self-center justify-center">
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
