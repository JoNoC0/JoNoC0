import React from 'react'
import './Header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>John Nguyen</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header;