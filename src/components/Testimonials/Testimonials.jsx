import React from 'react';
import './Testimonials.css';
import AVT1 from '../../assets/AVT1.jpg'
import AVT2 from '../../assets/AVT2.jpg'
import AVT3 from '../../assets/AVT3.jpg'
import AVT4 from '../../assets/AVT4.jpg'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="" />
            <h5 className='client__name'>Anonymous Model</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea. Facere minima debitis saepe minus itaque qui veniam totam iusto.
              </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="" />
            <h5 className='client__name'>Anonymous Model</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea. Facere minima debitis saepe minus itaque qui veniam totam iusto.
              </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="" />
            <h5 className='client__name'>Anonymous Model</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea. Facere minima debitis saepe minus itaque qui veniam totam iusto.
              </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="" />
            <h5 className='client__name'>Anonymous Model</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea. Facere minima debitis saepe minus itaque qui veniam totam iusto.
              </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;