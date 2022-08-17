import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function ValidatedInput(props) {
  const [input, setInput] = useState('');
  let mark = '';
  let errorMsg = '';

  const validation = /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])/;

  if (!input) {
    errorMsg = 'A password is required.';
    mark = 'fa-x';
  } else if (input.length < 8) {
    errorMsg = 'Your password is too short.'
    mark = 'fa-x';
  } else if (!validation.test(input)) {
    errorMsg = `Your password requires atleast one capital letter,
    one digit, and one special character.`;
  } else {
    errorMsg = '';
    mark = 'fa-check';
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password</h2>
      <div className="password-row">
        <input className='password-input' onChange={handleChange} type="password" />
        <i className={`password-mark fa-solid ${mark}`}></i>
      </div>
      <p className='password-error'>{errorMsg}</p>
    </form>
  );
}

export default ValidatedInput;
