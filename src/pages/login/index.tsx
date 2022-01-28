import React from "react";

export default function Login(props: any) {
  return (
    <React.Fragment>
      <div className="justify-center min-h-screen mx-0 sm:flex sm:flex-row">
        <div className="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
          <div className="flex-col self-start hidden text-white lg:flex">
            <img src="" className="mb-3" />
            <h1 className="mb-3 text-5xl font-bold">Hi 👋 Welcome Back Aji </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="z-10 flex self-center justify-center">
          <div className="p-12 mx-auto bg-white rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-gray-700">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type=""
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                  Password
                </label>
                <input
                  className="content-center w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="text-green-400 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer hover:bg-green-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
