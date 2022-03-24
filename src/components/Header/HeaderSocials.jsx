import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/john-jonoc0/' rel='noopener'><BsLinkedin /></a>
        <a href='https://github.com/JoNoC0' rel='noopener'><BsGithub /></a>
        <a href='https://twitter.com/JoNoC0' rel='noopener'><BsTwitter /></a>    
    </div>
  )
}

export default HeaderSocials