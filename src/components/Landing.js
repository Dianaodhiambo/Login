import React, { useState } from "react";
import "../Landing.css";
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form
  };

  return (
    <div className="contact-form">
      <nav className="side-navbar">
        <h1>Get in touch</h1>
        <p>
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
        <br></br>
        <h2>Chat with us</h2>
        <p>Our friendly team is here to help.</p>
        <br></br>
        <h2>Office</h2>
        <p>Come say hello at our office HQ Tom Mboya street, Nyayo Plaza</p>
        <br></br>
        <h2>Phone</h2>
        <p>Mon-Fri from 8am to 5pm. +25478998654</p>
      </nav>
      <div className="welcome-message">
        <h1>Welcome!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <label htmlFor="message">How can we help?</label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <button type="submit">Get started</button>
      </form>
    </div>
  );
};

export default ContactForm;
