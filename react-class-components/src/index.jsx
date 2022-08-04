import React from 'react';
import ReactDOM from 'react-dom';

// class CustomButton extends React.Component {
//   render() {
//     return <button>{this.props.text}</button>
//   };
// }

/* class components are now considered legacy.
React encourages function components
so I will attempt to redo this with a function instead */

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
