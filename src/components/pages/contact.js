import React, { useState } from 'react';
import '../frame/frame.scss';
import './style/contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add mailto or backend logic here
    alert('Message sent!');
  };

  return (
    <div className="content">
      <div className="single-card">
        {/* Headline at top-left */}
        <h2 className="headline">We're here to help</h2>

        {/* Form and Info Card */}
        <div className="card-content">
          {/* Left side - Form */}
          <div className="card-left">
            <form onSubmit={handleSubmit} autocomplete="off">
              <label for="name">Name</label>
              <input
                type="text"
                placeholder="e.g. john smith"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label for="name">Email address</label>
              <input
                type="email"
                placeholder="e.g. example@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label for="name">Messagee</label>
              <textarea
              type="text"
                placeholder="Let me know how can i help you"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right side - Info Card */}
          <div className="card-right">
            <div className="inner-info-card">
              <h2>Let's connect</h2>
              <p>
                Feel free to reach out for any questions or suggestions. <br />
                We usually respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
