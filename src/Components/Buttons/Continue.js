import React from "react";
const Continue = (props) => {
  console.log('Continue', props.submit)
  return <button type="submit" onSubmit = {props.handleSubmit} className="continueBtn">{props.buttonValue}</button>
};
export default Continue;