import React, { useState } from 'react';
import './contact.css';
import axios from 'axios'; 
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      if(formData.firstName === ""){
        toast.error("First name is required")
        return
      }
      if(formData.lastName === ""){
        toast.error("Last name is required")
        return
      }
      if(formData.email === ""){
        toast.error("Email is required")
        return
      }
      if(formData.message === ""){
        toast.error("Message is required")
        return
      }
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/create`, formData);

      // Handle success
      if (response.status === 200) {
        setShowConfetti(true); 
        toast.success('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <div className="contactForm">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="single-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-in mr"
                value={FormData.firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-in ml"
                value={FormData.lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="multiple-row">
              <input
                type="email"
                placeholder="Email"
                className="form-in"
                value={FormData.email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                className="form-in"
                required
                value={FormData.message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {/* <input type="submit" id="submit"/><label for="submit"><i class="fas fa-paper-plane"></i></label> */}
            </div>
            <button type='submit' className='submitButton'>submit</button>
          </form>
        </div>
        <div className="contact-right">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p>
              <i className="fas fa-phone-alt"></i> +92 3144363910
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@eliphstore.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Lahore, Pakistan
            </p>
          </div>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    {showConfetti && <Confetti />}
    </>
  );
};

export default Contact;
