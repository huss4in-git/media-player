import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#3dff88'}}>
      <Container style={{backgroundColor:'#3dff88'}}>
        <Navbar.Brand  style={{backgroundColor:'#3dff88'}}>
          <div style={{backgroundColor:'#3dff88'}} className='d-flex align-items-center mt-2'>
            <div style={{backgroundColor:'#3dff88'}}>
              <svg style={{ marginTop: '-17px',backgroundColor:'#3dff88' }} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 54 55" fill="none">
                <path d="M28.9949 23.2662C38.0635 28.7293 38.3689 29.9017 38.3689 30.6051C38.4159 32.1526 36.6773 33.4656 34.4689 35.2476C33.0828 36.3496 31.9081 36.9827 31.0388 37.4516C25.2828 40.4528 22.3461 42.0003 21.1714 40.9921C20.4901 40.4059 20.1847 39.468 20.3257 31.0271C20.4901 21.9532 20.8895 20.8512 21.6648 20.3119C22.5106 19.7492 23.5443 20.0071 28.9949 23.2662Z" fill="#FFFF46" stroke="#0E1016" stroke-width="3.92996" stroke-miterlimit="10" stroke-linecap="round"></path>
              </svg>
              <span className='head' style={{ fontSize: '28px', color: 'black',backgroundColor:'#3dff88' }}>M-Player</span>
            </div>
            <div className='nav d-flex'>
            <Link style={{backgroundColor:'transparent'}} className='link' to={'/home'}>Home</Link>
            <Link style={{backgroundColor:'transparent'}} className='link ms-5' to={'/watch-history'}>Watch History</Link>
            </div>
            <div style={{position:'absolute', right:'2%',backgroundColor:'#3dff88'}}>
              <svg style={{backgroundColor:'transparent'}} width="320" height="30" viewBox="0 0 507 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M505 28C479.395 24.8162 479.84 12.4065 451.181 8.65109C432.427 6.19729 430.202 11.2896 391.152 14.8076C370.07 16.7337 349.287 18.6334 323.879 15.6871C290.438 11.8085 291.028 4.41191 267.99 4.2536C232.231 4.00735 227.45 21.8435 196.576 20.0845C164.637 18.3255 159.058 -1.33999 133.442 2.49461C110.828 5.88067 105.933 22.5735 86.8683 20.0845C75.4835 18.5982 72.5856 12.0371 52.714 8.65109C46.3178 7.56051 41.0912 7.29666 33.0494 6.89209C22.7088 6.36826 12.3406 6.36826 2 6.89209" stroke="#FFFF38" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <button style={{ backgroundColor: 'black', color: '#3dff88', fontSize: '18px', fontWeight: 600, width: '120px', height:'50px', marginRight:'60px'}} className='btn'>Contact</button>
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header