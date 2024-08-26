import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formType, setFormType] = useState('login');

  const handleFormSwitch = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="contact-us-page">
      <div className="form-container">
        <h2>{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
        {formType === 'login' ? (
          <form className="form">
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Enter your password" required />
            </label>
            <button type="submit">Login</button>
            <p>
              Don't have an account?{' '}
              <button type="button" onClick={handleFormSwitch}>
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form className="form">
            <label>
              Name:
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Enter your password" required />
            </label>
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <button type="button" onClick={handleFormSwitch}>
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
