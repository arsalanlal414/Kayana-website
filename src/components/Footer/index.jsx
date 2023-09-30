import React from 'react'
import logo from '../../assets/kayana-logo.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import './footer.scss'

function index() {
  return (
    <footer className='footer'>
        <img src={logo} alt="logo img" className='logo' />
        <p>© 2023 by Kayana.</p>
        <div className="social-icons">
            <FaFacebook className='icon'/>
            <FaInstagramSquare className='icon'/>
            <FaSquareXTwitter className='icon'/>
            <FaLinkedin className='icon'/>
        </div>
    </footer>
  )
}

export default index