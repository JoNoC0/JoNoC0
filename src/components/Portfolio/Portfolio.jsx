import React from 'react';
import './Portfolio.css';
import PORT1 from '../../assets/FULLfill.png'
import PORT2 from '../../assets/mealTime.png'
import PORT3 from '../../assets/bookback.jpg'
import PORT4 from '../../assets/budgetTracker.png'
import PORT5 from '../../assets/ecommerce.gif'
import PORT6 from '../../assets/teamprofile.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT1} alt="" />
          </div>
          <h3 className='portfolio-title'>FULLfill!</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/pardue95/group-5-project-3" className='btn' rel='noopener'>GitHub</a>
            <a href="https://fullfillbabyregistry.herokuapp.com/" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT2} alt="" />
          </div>
          <h3 className='portfolio-title'>Mealtime</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JoNoC0" className='btn' rel='noopener'>GitHub</a>
            <a href="http://www.dribbble.com" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT3} alt="" />
          </div>
          <h3 className='portfolio-title'>Best Book Review Site</h3>
          <div className="portfolio__item-cta">          
            <a href="https://github.com/JoNoC0" className='btn' rel='noopener'>GitHub</a>
            <a href="http://www.dribbble.com" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT4} alt="" />
          </div>
          <h3 className='portfolio-title'>Budget Tracker</h3>
          <div className="portfolio__item-cta">          
            <a href="https://github.com/JoNoC0" className='btn' rel='noopener'>GitHub</a>
            <a href="http://www.dribbble.com" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT5} alt="" />
          </div>
          <h3 className='portfolio-title'>Ecommerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JoNoC0" className='btn' rel='noopener'>GitHub</a>
            <a href="http://www.dribbble.com" className='btn btn-primary' rel='noopener'>Live Demo</a>         
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT6} alt="" />
          </div>
          <h3 className='portfolio-title'>Team Profile</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JoNoC0" className='btn' rel='noopener'>GitHub</a>
            <a href="http://www.dribbble.com" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>
      </div>
    </section> 
  )
}

export default Portfolio;