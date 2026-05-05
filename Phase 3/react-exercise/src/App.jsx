import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shared from './components/Shared';
import Home from './pages/home/Home';
import Mac from './pages/mac/Mac';
import './App.css';
import NoPage from './pages/NoPage';

function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Shared/>}>
      <Route index element={<Home/>}></Route>
      <Route path="mac" element={<Mac/>}></Route>
      <Route path="*" element={<NoPage/>}></Route>
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
