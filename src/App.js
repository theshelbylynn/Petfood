import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Bar';
import { Route, Routes } from "react-router-dom"
import { Carousel } from 'react-bootstrap';
import Home from './Home';




function App() {
  return (

    <div> 
      <Bar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}


export default App;