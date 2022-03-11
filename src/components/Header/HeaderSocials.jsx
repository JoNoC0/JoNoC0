import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com' rel='nooopener'><BsLinkedin /></a>
        <a href='https://www.github.com' rel='nooopener'><BsGithub /></a>
        <a href='https://www.twitter.com' rel='nooopener'><BsTwitter /></a>    
    </div>
  )
}

export default HeaderSocials