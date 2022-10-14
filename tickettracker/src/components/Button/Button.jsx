import "./Button.scss";
import React from 'react'


const Button = (props) => {
   return <button value={props.value}>{props.value}</button>;
};

export default Button;