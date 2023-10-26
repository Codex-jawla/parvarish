import React, { useRef } from 'react';
import Ourcontact from '../home/Ourcontact'
import emailjs from '@emailjs/browser';
import './cont.css'


const Contactus = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2jw5e4', 'template_fojknxq', form.current, '8bCZWWKAJxDiryCET')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (<>
  <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" placeholder="your name" />
          <input type="text" name="user_email" placeholder="your email" />
          <textarea
            name="message"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <button type="submit" onClick={()=>{
          }} className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
    <Ourcontact/>
  </>
  )
}

export default Contactus