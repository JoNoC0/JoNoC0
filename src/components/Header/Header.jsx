import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/John.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
 
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>John Nguyen</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='John' className='me__image'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;