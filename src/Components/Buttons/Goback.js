import React, { Component } from "react";
const Goback = (props) => {
  const buttonValue = props.buttonVal !== undefined ? props.buttonVal : "Go Back";

  return <button className="goBackBtn">{buttonValue}</button>;
};
export default Goback;