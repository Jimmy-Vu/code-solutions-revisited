import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function NewsletterForm(props) {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} id="email" type="text" />
      <button>Sign Up</button>
    </form>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<NewsletterForm />);
