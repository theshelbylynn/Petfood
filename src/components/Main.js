import main from './images/main.png';
import { Route, Routes, Link } from "react-router-dom"


function Main() {
    return(
               <div className='main'>

        <div className='main-image'>
        <img id="main-image" src={main} alt="dog and cat in grass" />
        </div>
  
      <div className='main-content'>
        <h1>Premium Pet Food</h1>
       <a href="/Shop"><button id="main-button">Order Now</button></a>
        </div>
      </div>
    );
}

export default Main;