import React, { useRef } from 'react';
import './Contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
// import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b45bc9b', 'template_18ypy4c', form.current, 'VRtN_D-tXOBLiuZZb')
    e.target.reset();
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>JNguyeningCo@gmail.com</h5>
            <a href="mailto:JNguyeningCo@gmail.com" rel='noopener'>Send a message</a>
          </article>
          

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>John Web Dev</h5>
            <a href="https://m.me/HoaJohnWinn" rel='noopener'>Send a message</a>
          </article>  

          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone" rel='noopener'>Send a message</a>
          </article>     */}
        </div>  
        {/* ====== END OF CONTACT OPTIONS ====== */}

        {/* ====== START OF CONTACT FORM ====== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />  
          <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section> 
  )
}

export default Contacts;