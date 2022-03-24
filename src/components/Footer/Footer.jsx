import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <footer>
      <a href="#" className='footer__logo'>JNguyen</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/john-jonoc0/' rel='noopener'><BsLinkedin /></a>
        <a href='https://github.com/JoNoC0' rel='noopener'><BsGithub /></a>
        <a href='https://twitter.com/JoNoC0' rel='noopener'><BsTwitter /></a>    
      </div>

      <div className="footer__copyright">
        <small>&copy; {year} John Nguyen. All rights reserved.</small>
        <small>special thanks to EGATOR</small>
      </div>
    </footer>
  )
}

export default Footer;