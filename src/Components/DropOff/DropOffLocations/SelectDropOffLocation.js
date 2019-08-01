import React, { Component } from "react";
import DropOffLocationsInputs from "./DropOffLocationsInputs";
import "./SelectDropOffLocation.css";

class SelectDropOffLocation extends Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return (
      <div className="dropOffLocationContainer">
        <DropOffLocationsInputs onSubmit={this.submit} />
      </div>
    );
  }
}

export default SelectDropOffLocation;
