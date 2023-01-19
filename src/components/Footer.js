import React from 'react';
import second from './images/second-logo.png';


function Footer() {
    return (
      <div className="footer">

        <div className='foot-box'>
        <img id="second" src={second} alt="Secondary Logo" />
        </div>

        <div className='foot-box'>
          <h4>Navigation</h4>
            <p>Home</p>
            <p>Shop</p>
            <p>Schedule Delivery</p>
            <p>Returns</p>
            <p>Help </p>
        </div>

        <div className='foot-box'>
        <h4>Socials</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Pinterest</p>
        </div>

        <div className='foot-box'>
        <h4>Contact</h4>
            <p>Phone #</p>
            <p>Address</p>
            <p>Email</p>
        </div>

      </div>
      
    );
  }



export default Footer;


