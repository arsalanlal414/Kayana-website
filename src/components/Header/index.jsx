import React from 'react'
import './header.scss'
import logo from '../../assets/kayana-logo.png'

function index() {
  return (
    <header className='header-container'>
        <nav>
            <a href="#">
                <img src={logo} alt="kayana_logo" width="180px"/>
            </a>
        </nav>
    </header>
  )
}

export default index