import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import useInterval from './hooks/useInterval';

function StopWatch(props) {
  const [time, setTime] = useState(0);
  const [delay, setDelay] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonClass, setButtonClass] = useState('stopwatch-button fa-solid fa-play');

  const intervalID = useInterval(() => {
    setTime(time + 1);
  }, delay);

  function buttonClick() {
    if (!isRunning) {
      setButtonClass('stopwatch-button fa-solid fa-pause');
      setIsRunning(true);
      setDelay(1000);
    } else {
      setButtonClass('stopwatch-button fa-solid fa-play');
      setIsRunning(false);
      setDelay(null);
    }
  }

  function faceClick() {
    if (!isRunning) {
      setTime(0);
    }
  }

  return (
    <div className='stopwatch-container'>
      <div onClick={faceClick} className="stopwatch-face">
        <h1 className="face-number">
          {time}
        </h1>
      </div>
      <i onClick={buttonClick} className={buttonClass}>
    </i>
      </div >
    );
}

export default StopWatch;
