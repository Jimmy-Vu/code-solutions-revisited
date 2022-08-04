import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  const [isClicked, setClickedStatus] = useState(false);

  function clickHandler() {
    if (isClicked) {
      setClickedStatus(false);
    } else {
      setClickedStatus(true);
    }
  }

  if (isClicked) {
    return (<button onClick={clickHandler}>Thank You!</button>);
  } else {
    return (<button onClick={clickHandler}>Click Me!</button>);
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);
