import React from 'react';
import './Testimonials.css';
import AVT1 from '../../assets/AVT1.jpg'
import AVT2 from '../../assets/AVT2.jpg'
import AVT3 from '../../assets/AVT3.jpg'
import AVT4 from '../../assets/AVT4.jpg'

const data = [
  {
    avatar: AVT1,
    name: 'Anonymous Model',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod quaerat aliquam animi aspernatur error numquam excepturi neque iusto omnis, ut quae velit, recusandae eaque vel! Saepe ipsa vitae ipsam!'
  },
  {
    avatar: AVT2,
    name: 'Anonymous Model',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod quaerat aliquam animi aspernatur error numquam excepturi neque iusto omnis, ut quae velit, recusandae eaque vel! Saepe ipsa vitae ipsam!'
  },
  {
    avatar: AVT3,
    name: 'Anonymous Model',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod quaerat aliquam animi aspernatur error numquam excepturi neque iusto omnis, ut quae velit, recusandae eaque vel! Saepe ipsa vitae ipsam!'
  },
  {
    avatar: AVT4,
    name: 'Anonymous Model',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quod quaerat aliquam animi aspernatur error numquam excepturi neque iusto omnis, ut quae velit, recusandae eaque vel! Saepe ipsa vitae ipsam!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials;