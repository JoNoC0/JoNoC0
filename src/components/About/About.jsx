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
            <img src={ME} alt='John Nguyen developer' />
          </div>
        </div>  
        

          <div className="about__content">
           <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Certificate, Full Stack Web Development Bootcamp, from the University of Texas at Austin</small>
            </article>
                  
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0</small>
            </article>
          
            <article className="about__card">
              <VscLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Visit my GitHub Link below to see some of the projects I worked on  </small>
              <small><a href='https://github.com/JoNoC0' rel='noopener'>Repo</a></small>
            </article>
          </div>  
      
          <p>
            A recent Full Stack Web Development Bootcamp from the University of Texas at Austin. After many years in the restaurant business, I decided to take a leap into a different profession. It has been a very difficult, yet rewarding experience. I am not the best at Web Development, I will strive to be the best. I enjoy challenges and learning. Without learning there is will be no growth. I enjoy communicating and meeting people, learn about culture, and experience life. I'm very determined, adaptable, and not afraid to make mistakes. "Without mistakes we will never learn." Click the "Let's Talk" button to connect with me!
          </p>
          
          <a href='/contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section> 
  )
}

export default About;