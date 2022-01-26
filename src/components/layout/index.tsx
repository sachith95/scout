// tailwind layout
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';


export default function Layout(props:any) {
    return (
       <div className="flex flex-col h-screen justify-between opacity-1 bg-gray-900">    
           <Header/>
           <Outlet />
           <Footer/>
      </div>
    );
}