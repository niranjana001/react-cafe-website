import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="contact-container">
        <div class="contact-info">
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div class="links">
          <a href="#menu" class="menu-link">Menus</a>
          <a href="#hours" class="hours-link">Hours of operation</a>
        </div>
      </div>


      <div class="header">
        <div class="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div class="dropdown">
          <button class="menu-button">Menu</button>
          <div class="dropdown-content">
            <a href="#">ABOUT</a>
            <a href="#">CAKES, CATERING & GIFT BASKETS</a>
            <a href="#">SPECIALTIES</a>
            <a href="#">MENUS</a>
            <a href="#">OUR STORY</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>

      <div class="main">
  <div class="half-height" >
    <div class="content">
      <h1>HANDMADE, WITH AN EXTRA PINCH OF LOVE</h1>
    </div>
  </div>
  <div class="half-height">
    <div class="content">
      <p>A pinch is the difference between bland and blissful.</p>
    </div>
  </div>
</div>



    </div>
  );
}

export default App;
