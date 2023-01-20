import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Bar';
import { Route, Routes } from "react-router-dom"
import { Carousel } from 'react-bootstrap';
import Home from './Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import DogFoodPage from './components/DogFoodPage';
import CatFoodPage from './components/CatFoodPage';
import TreatPage from './components/TreatPage';




function App() {
  return (

    <div> 
      <Bar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="DogFoodPage" element={<DogFoodPage />} />
      <Route path="CatFoodPage" element={<CatFoodPage />} />
      <Route path="TreatPage" element={<TreatPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;