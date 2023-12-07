import React from 'react'
import Footer_logo from '../images/footer_logo.png'

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <img src={Footer_logo} alt='Company footer logo'></img>
        <ul>
            <h5>Doormat Navigation</h5>
          <a href='/'> <li>Home</li> </a>
          <a href='/'>  <li>About</li> </a>
          <a href='/'>  <li>Menu</li> </a>
          <a href='/'>  <li>Reservations</li> </a>
          <a href='/'>  <li>Order Online</li> </a>
          <a href='/'>  <li>Login</li> </a>
        </ul>
        <ul>
            <h5>Contact</h5>
          <a href='/'> <li>Address</li> </a>
          <a href='/'>  <li>Phone Number</li> </a>
          <a href='/'>  <li>Email</li> </a>
        </ul>
        <ul>
            <h5>Social Media Links</h5>
          <a href='https://www.instagram.com'> <li>Instagram</li> </a>
          <a href='https://www.facebook.com'>  <li>Faceboon</li> </a>
          <a href='https://www.twitter.com'>  <li>Twitter</li> </a>
          <a href='https://www.youtube.com'>  <li>Youtube</li> </a>
        </ul>
        </div>
    </footer>
  )
}

export default Footer