import React from 'react'
import './About.css'
import ME from '../../assets/John.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>  
        

          <div className="about__content">
           <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Bootcamp Graduate</small>
            </article>
                  
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0</small>
            </article>
          
            <article className="about__card">
              <VscLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>  
      
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia mollitia dolores ex itaque recusandae odit dicta, natus minima ratione! Quam ratione voluptates reprehenderit dolores consectetur, voluptate soluta facilis tempore error!
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section> 
  )
}

export default About;