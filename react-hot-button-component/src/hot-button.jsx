import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function HotButton(props) {
  const [clickCount, setClickCount] = useState(0);

  function clickHandler() {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  }

  if (clickCount < 3) {
    return (
      <button onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 3 && clickCount < 6) {
    return (
      <button className='three-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 6 && clickCount < 9) {
    return (
      <button className='six-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 9 && clickCount < 12) {
    return (
      <button className='nine-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 12 && clickCount < 15) {
    return (
      <button className='twelve-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 15 && clickCount < 18) {
    return (
      <button className='fifteen-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  } else if (clickCount >= 18) {
    return (
      <button className='eighteen-clicks' onClick={clickHandler}>
        Hot Button
      </button>
    );
  }

}

export default HotButton;
