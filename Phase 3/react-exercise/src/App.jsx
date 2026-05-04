import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './components/Shared';
import Home from './pages/Home';
import './App.css';
import NoPage from './pages/NoPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared/>}>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
