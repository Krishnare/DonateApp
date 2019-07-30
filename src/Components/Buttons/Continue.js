import React from "react";
const Continue = (props) => {
  console.log('Continue', props)
  return <button type="submit" onSubmit = {props.handleSubmit} className="continueBtn">{props.buttonVal}</button>
};
export default Continue;