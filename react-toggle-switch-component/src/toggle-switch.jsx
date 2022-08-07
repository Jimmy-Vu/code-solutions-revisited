import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom/client';

function ToggleSwitch(props) {
  const [switchStatus, setStatus] = useState('OFF');
  const [switchContainerStyle, setSwitchContainerStyle]= useState('switch-container_off');
  const [switchSelectorStyle, setSwitchSelectorStyle] = useState('switch-selector_off');

  function clickHandler() {
    if (switchStatus === 'OFF') {
      setStatus('ON');
      setSwitchContainerStyle('switch-container_on');
    } else {
      setStatus('OFF');
      setSwitchContainerStyle('switch-container_off');
    }
  }

  return (
    <div className='container' onClick={clickHandler}>
      <div className={`switch-container ${switchContainerStyle}`}>
        <div className='switch-selector'></div>
      </div>
      <h1 className='switch-status-label'>{switchStatus}</h1>
    </div>
  )
}

export default ToggleSwitch;
