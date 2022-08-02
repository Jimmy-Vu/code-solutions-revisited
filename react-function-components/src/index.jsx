import React from "react";
import ReactDOM from "react-dom";

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const root = document.querySelector('#root');
ReactDOM.render(<CustomButton text='Click Me!' />, root);
