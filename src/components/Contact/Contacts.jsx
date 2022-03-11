import React from 'react';
import './Contacts.css';
import {MdOutlineEmail} from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';

export const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>JNguyeningCo@gmail.com</h5>
            <a href="mailto:JNguyeningCo@gmail.com">Send a message</a>
          </article>
          

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>John Web Dev</h5>
            <a href="https://m.me/HoaJohnWinn">Send a message</a>
          </article>  

          {/* <article className="contact__option">
            <RiMessengerLine />
            <h4>Email</h4>
            <h5>JNguyeningCo@gmail.com</h5>
            <a href="mailto:JNguyeningCo@gmail.com">Send a message</a>
          </article>     */}
        </div>  
        {/* ====== END OF CONTACT OPTIONS ====== */}
        <form action=""></form>
      </div>
    </section> 
  )
}

export default Contacts;