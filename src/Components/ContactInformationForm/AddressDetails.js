import React, { Component } from "react";
import RenderField from "./renderField";
import { Field, reduxForm } from "redux-form";

class AddressDetails extends Component {
  render() {
    return (
      <div>
        <div className="addressPickupContainer">
          <h5>Address</h5>
          <div className="addressPickup">
            <span>
              Locate Large item Locate Large item Locate Large item Locate Large
              item Locate Large item
            </span>
          </div>
        </div>
        <div>
          <Field
            name="streetAddress"
            component={RenderField}
            type="text"
            handleChange={this.handleChange}
            placeholder="Stree Address"
            value={this.value}
            id="streetAddress"
            noValidate
          />
          <Field
            name="city"
            component={RenderField}
            type="text"
            handleChange={this.handleChange}
            placeholder="City"
            value={this.value}
            id="city"
            className="city"
            noValidate
          />
          <Field
            name="zipCode"
            component={RenderField}
            type="text"
            handleChange={this.handleChange}
            placeholder="Zip Code"
            value={this.value}
            id="zip"
            className="zip"
            noValidate
          />
        </div>
      </div>
    );
  }
}

export default AddressDetails;
