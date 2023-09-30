import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Section3() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) {
      // Email is empty
      setIsValidEmail(false);
      toast.error('Email is required');
    } else if (!email.match(emailRegex)) {
      // Invalid email format
      setIsValidEmail(false);
      toast.error('Invalid Email');
    } else {
      // Valid email
      setIsValidEmail(true);
      console.log(email);
      toast.success('Successfully Joined');
      setEmail("")
    }
  };

  return (
    <section className='section3'>
      <h3>
        Be one of our Beta Testers! <br />Limited spots available.
      </h3>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            Enter your email{' '}<span>*</span>
          </label>
          <div className='input-container'>
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='enter your email...'
            />
            <button>Join</button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default Section3;
