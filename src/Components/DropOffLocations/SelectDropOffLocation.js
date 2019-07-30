import React, { Component } from "react";
import SelectAddress from "./SelectAddress";
import { Field, reduxForm } from "redux-form";
import RenderField from "../ContactInformationForm/renderField";
import { connect } from "react-redux";
import Continue from "../Buttons/Continue";
import Goback from "../Buttons/Goback";
import { Link } from "react-router-dom";
import "./SelectDropOffLocation.css";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Minimum be 2 characters or more";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length < 2) {
    errors.phoneNumber = "Minimum be 2 characters or more";
  }
  return errors;
};
class SelectDropOffLocation extends Component {
  constructor() {
      super();
    this.state = ({
      buttonVal: "Continue"
    });
  }
  render() {
    return (
      <div className="dropOffLocationContainer">
        <h5>Select a Drop Off Location</h5>
        <SelectAddress />
        <div className="openStatus">
          <b>Open:</b> Monday-Saturday 9:30am - 5:00pm
        </div>
        <h5>Select a Drop Off Location</h5>
        <div className="fields">
          <form>
            <Field
              name="FullName"
              component={RenderField}
              type="text"
              handleChange={this.handleChange}
              placeholder="Full Name"
              value={this.value}
              id="streetAddress"
              noValidate
            />
            <Field
              name="Email"
              component={RenderField}
              type="text"
              handleChange={this.handleChange}
              placeholder="Email"
              value={this.value}
              id="streetAddress"
              noValidate
            />
            <Field
              name="phoneNumber"
              component={RenderField}
              type="text"
              handleChange={this.handleChange}
              placeholder="Phone Number"
              value={this.value}
              id="phoneNumber"
              noValidate
            />
            <textarea
              rows="5"
              cols="38"
              placeholder="Additional Infromation (Optional)"
            />
          </form>
        </div>
        <div className="screenBtn">
          <Link className="linkRoute" to="/ContactDetails">
            <Continue buttonVal={this.state.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/donationType">
            <Goback />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formReducer: state.DropOffLocation
  };
};
export default reduxForm({
  form: "DropOffLocation",
  validate
})(connect(mapStateToProps)(SelectDropOffLocation));
