// tailwind layout
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

export default function Layout(props: any) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 opacity-1">
      <Header />
      <div className="flex flex-col justify-between h-screen">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
