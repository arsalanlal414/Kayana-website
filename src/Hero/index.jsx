import React from 'react'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import './sections/sections.scss'

function index() {
  return (
    <main className='hero-container'>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}

export default index