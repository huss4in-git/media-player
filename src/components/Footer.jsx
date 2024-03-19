import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
faInstagram

function Footer() {
  return (
    <div style={{height:'350px', backgroundColor:'black'}} className='w-100 justify-content-center align-items-center d-flex flex-column'>
      <div style={{backgroundColor:'black'}} className='w-100 justify-content-evenly d-flex'>
        <div className='website' style={{width:'400px', backgroundColor:'black'}}>
          <h4 style={{fontFamily:'SpaceMono-Bold', color:'#ffff46', backgroundColor:'black'}}>M-Player</h4>
        {/* <FontAwesomeIcon icon={faPlay} style={{color: "#63E6BE",fontSize:'30px'}} /> */}
          <p className='mt-3' style={{fontSize:'12px', color:'white', backgroundColor:'black'}}>We provide features such as playback controls, playlist management, equalization options, and support for various file formats. It can be used for entertainment purposes, allowing users to enjoy music, movies, and other digital content </p>
        </div>
        <div className='links' style={{backgroundColor:'black'}}>
          <h4 style={{fontFamily:'SpaceMono-Bold', color:'#ffff46', backgroundColor:'black'}}>Links</h4>
          <p className='mt-3' style={{fontSize:'12px', color:'white', backgroundColor:'black'}}><Link to={'/'} style={{backgroundColor:'black', textDecoration:'none', color:'white'}}>Landing Page</Link></p>
          <p style={{fontSize:'12px', color:'white', backgroundColor:'black'}}><Link to={'/home'} style={{backgroundColor:'black', textDecoration:'none', color:'white'}}>Home</Link></p>
          <p style={{fontSize:'12px', color:'white', backgroundColor:'black'}}><Link to={'/watch-history'} style={{backgroundColor:'black', textDecoration:'none', color:'white'}}>Watch History</Link></p>
          </div>
        <div className='guides' style={{backgroundColor:'black'}}>
          <h4 style={{fontFamily:'SpaceMono-Bold', color:'#ffff46', backgroundColor:'black'}}>Guides</h4>
          <p className='mt-3' style={{fontSize:'12px', color:'white', backgroundColor:'black'}}>React</p>
          <p style={{fontSize:'12px', color:'white', backgroundColor:'black'}}>React Bootstrap</p>
          <p style={{fontSize:'12px', color:'white', backgroundColor:'black'}}>Bootswatch</p>
        </div>
        <div className='contacts' style={{backgroundColor:'black'}}>
          <h4 style={{fontFamily:'SpaceMono-Bold', color:'#ffff46', backgroundColor:'black'}}>Contact Us</h4>
          <div className='d-flex mt-3' style={{backgroundColor:'black'}}>
            <input style={{fontSize:'12px', backgroundColor:'black'}} type="text" className='form-control' placeholder='Enter your Email ID' />
            <button style={{fontSize:'12px', fontWeight:'600'}} className='btn btn-success ms-2'>Subscribe</button>
          </div>
          <div style={{backgroundColor:'black'}} className='d-flex justify-content-around mt-3 pt-2'>
            <FontAwesomeIcon style={{backgroundColor:'black'}} icon={faInstagram} size='2xl' />
            <FontAwesomeIcon style={{backgroundColor:'black'}} icon={faFacebook} size='2xl' />
            <FontAwesomeIcon style={{backgroundColor:'black'}} icon={faLinkedin} size='2xl' />
            <FontAwesomeIcon style={{backgroundColor:'black'}} icon={faTwitter} size='2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer