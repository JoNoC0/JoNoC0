import React from 'react';
import './Services.css';
import { BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
             <h3>Freelance</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Currently, I am working on some personal projects to help my development skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Restaurant Website Coming Soon!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Barber Shop Website Coming Soon!</p>
            </li>
          </ul>
        </article>  
        {/* END OF FREELANCE */}
        <article className="service">
          <div className="service__head">
             <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Willing to start off as a junior developer to get a feel in this industry</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improving and expanding my knowledge of CSS, and more Backend of MongoDB, GraphQL, MySQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Still continuing my learning by taking courses on AWS, Python, and C#</p>
            </li>
          </ul>
        </article>  
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
             <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>This site was made with React and CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>This site is a demo of some of my capabilities and what I've learn so far</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Please leave a feedback(good or bad) in the contact section below. That's the only way I can become a better developer</p>
            </li>
          </ul>
        </article>  
        {/* END OF CONTENT CREATION */}
      </div>
    </section> 
  )
}

export default Services;