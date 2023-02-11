import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import Exercises from './pages/Exercises';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:group" element={<Exercises />} />
      </Routes>
    </>
  );
}

export default App;
