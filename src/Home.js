import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Products from './components/Products';

import one from './components/images/reviewer-one.png';
import two from './components/images/reviewer-two.png';
import three from './components/images/reviewer-three.png';
import stars from './components/images/stars.png';



function Home() {
  return (

    <>
    <Main />
    <Products />

    <div className='cta-one'>
      <h1>Schedule Future Deliveries</h1>
      <button>Schedule Delivery</button>
    </div>



    <div className='review-container'>
      <h1>Reviews</h1>

    <div className='box-container'>


    <div className='review-boxes'>
    <img id="reviewer" src={one} alt="Reviewer One" />
    <p>“I’m so grateful of their
        Scheduling options!”</p>
        <img id="stars" src={stars} alt="Star Ratings" />
    </div>


      <div className='review-boxes'>
      <img id="reviewer" src={two} alt="Reviewer Two" />
      <p>“The only place I order from!”</p>
      <img id="stars" src={stars} alt="Star Ratings" />
      </div>


      <div className='review-boxes'>
      <img id="reviewer" src={three} alt="Reviewer Three" />
      <p>“Incredible prices, and Fast 
        shipping!”</p>
        <img id="stars" src={stars} alt="Star Ratings" />
      </div>


      </div>

      </div>

    </>
    
 
  );
}


export default Home;