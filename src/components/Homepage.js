import React from 'react'
import homepageImg from '../images/Homepage.png'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Chicago from './Chicago'
function Homepage() {
  return (
    <main>
      <div className='container'>
        <div className='heroSection'>
          <div className='heroItem1'>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
          </div>
        <div className='heroItem2'>
          <img src={homepageImg} alt='A plate of bruschetta' />
        </div>
        </div>
        <div className='Specials-section'>
          <Specials />
        </div>
        <div className='Testimonials-section'>
          <Testimonials />
        </div>
        <div>
          <Chicago />
        </div>
      </div>
    </main>
  )
}

export default Homepage