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
import ProductPage from './components/ProductPage';
import Account from './components/Account';
import Cart from './components/Cart';
import Order from './components/OrderReceived';
import Removed from './components/ItemRemoved';
import Schedule from './components/SchedulePage';




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
      <Route path="ProductPage" element={<ProductPage />} />
      <Route path="Account" element={<Account />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="OrderReceived" element={<Order />} />
      <Route path="ItemRemoved" element={<Removed />} />
      <Route path="SchedulePage" element={<Schedule />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;