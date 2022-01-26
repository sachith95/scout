import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        </Route>

      </Routes>
  );
}

export default App;
