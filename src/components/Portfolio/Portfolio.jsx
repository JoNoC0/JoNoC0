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
          <p className='portfolio-description'>
            A baby gift registry for expecting mother(s). User will signup then login to view available gifts the mother requested. User can the select gift(s) and save to their wishlist to purchase later.
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/pardue95/group-5-project-3" className='btn' rel='noopener'>GitHub</a>
            <a href="https://fullfillbabyregistry.herokuapp.com/" className='btn btn-primary' rel='noopener'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT2} alt="" />
          </div>
          <h3 className='portfolio-title'>Meal Time</h3>
          <p className='portfolio-description'>
            Meal Time is a front-end application, using recipe API, that allows user to search for a recipe based on the ingredient(s) searched. 
          </p>
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
          <p className='portfolio-description'>
            Best Book Review Site allows a user to comment, leave a review to a list of pre-loaded books. As a group we used CRUD(create, read, update, delete) which allows user to modify their categories, to-do list and comments.
          </p>
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
          <p className='portfolio-description'>
            Budget Tracker is a PWA, which allows the user to keep track of their finances displayed via graph.
          </p>
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
          <p className='portfolio-description'>
            E-commerce is a Object Relational Mapping project. Its a back-end e-commerce site using Express.js configured to Sequeliza and MySQL database.
          </p>
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
          <p className='portfolio-description'>
            Team Profile is an Object Oriented Program. Which will generate a webpage that displays the team's information to have quick access to their emails, GitHub profiles.
          </p>
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