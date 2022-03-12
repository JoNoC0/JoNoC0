import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com' rel='noopener'><BsLinkedin /></a>
        <a href='https://www.github.com' rel='noopener'><BsGithub /></a>
        <a href='https://www.twitter.com' rel='noopener'><BsTwitter /></a>    
    </div>
  )
}

export default HeaderSocials