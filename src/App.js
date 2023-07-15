import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from "./components/navbar/Navbar";
import About from './pages/About';
import Feedback from './pages/Feedback'
import Prediction from './pages/Prediction';
import Creat from './pages/creat'

import './App.css';

const App = () => (
  <div className="App">
    < div className="gradient__bg">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/prediction' element={<Prediction/>}/>
        <Route path='/creat' element={<Creat/>}/>

      </Routes>
    </div>
  </div>
);

export default App;
