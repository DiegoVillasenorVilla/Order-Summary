import React from 'react'
import './App.css'
//import bg from "./images_2/images/pattern-background-desktop.svg";
import main from "./images_2/images/illustration-hero.svg";
import music from "./images_2/images/icon-music.svg";

function App() {
 

  return (
    <div className="App">
      

      <div className='main-container'>
        <img  src={main} alt="illustration" className='main-image'/>
        <h1 className='header'> Order Summary</h1>
        <p className='paragraph'>
         You can now listen to millions of songs,<br/>
         audiobooks, and podcasts on any device <br/>
         anywhere you like!
        </p>

        <div className='price-container'>
         <img src={music} alt="music" className='music-icon'/>
         <span className='plan-span'>Anual Plan</span>
         {/*<span>$59.99/year</span>*/}
          <a href='https://www.figma.com/file/t2RZ67XWqK0GMLXjk30G5V/order-summary-component?node-id=0%3A82' className='link'>Change</a>
          <span className='price-span'>$59.99/year</span>
        </div>
        
        <button className='pay-button'>Proced to Payment</button>
        <button className='cancel-button'>Cancel Order</button>
      </div>

    </div>
  )
}

export default App
