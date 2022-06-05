import React from 'react'
import './contacts.css'
import{MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ze9klyr', 'template_cudritw', form.current, 'OHc05W3SjEDg5mfTl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'><h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className='contact_options'>
       <article className='contact_option'>
        <h4><MdOutlineEmail className='contact_options-icons'/></h4>
        <h5>pranshusati1@gmail.com</h5>
        <a href='mailto:pranshusati1@gmail.com' target="_blank">Send a message</a>
      </article>
      <article className='contact_option'>
        <h4><FaFacebookMessenger className='contact_options-icons'/></h4>
        <h5>Pranshu Sati</h5>
        <a href='https://m.me//100008305695047/' target="_blank">Send a message</a>
      </article>
      <article className='contact_option'>
        <h4><IoLogoWhatsapp className='contact_options-icons'/></h4>
        <h5>Pranshu Sati</h5>
        <a href='https://api.whatsapp.com/send?phone=9897944996' target="_blank">Send a message</a>
      </article>
    </div>
    {/* End of contact options */}
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your Full name' required/>
      <input type="email" name="email" placeholder='Your Email' required/>
      <textarea name='message' rows="7" placeholder='Your Message' required/>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact