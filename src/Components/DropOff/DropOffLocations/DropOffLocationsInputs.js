import React, { Component } from "react";
import SelectAddress from "./SelectAddress";
import { Field, reduxForm, formValueSelector } from "redux-form";
import RenderField from "../ContactInformationForm/renderField";
import { connect } from "react-redux";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import { Link } from "react-router-dom";

const onSubmit = value => {
  alert(value);
};
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
  if (!values.additionalInfo) {
    errors.additionalInfo = "Required";
  } else if (values.additionalInfo.length < 2) {
    errors.additionalInfo = "Minimum be 2 characters or more";
  }
  return errors;
};
const DropOffLocationsInputs = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const state = {
    buttonVal: "Continue"
  };
  return (
    <div>
      <h5>Select a Drop Off Location</h5>
      <SelectAddress />
      <div className="openStatus">
        <b>Open:</b> Monday-Saturday 9:30am - 5:00pm
      </div>
      <h5>Select a Drop Off Location</h5>
      <div className="fields">
        <form onSubmit={handleSubmit}>
          <Field
            name="FullName"
            component={RenderField}
            type="text"
            //   handleChange={this.handleChange}
            placeholder="Full Name"
            //   value={this.value}
            id="streetAddress"
            noValidate
          />
          <Field
            name="Email"
            component={RenderField}
            type="text"
            //   handleChange={this.handleChange}
            placeholder="Email"
            //   value={value}
            id="streetAddress"
            noValidate
          />
          <Field
            name="phoneNumber"
            component={RenderField}
            type="text"
            //   handleChange={this.handleChange}
            placeholder="Phone Number"
            //   value={value}
            id="phoneNumber"
            noValidate
          />
          <textarea
            rows="5"
            cols="38"
            name="additionalInfo"
            placeholder="Additional Infromation (Optional)"
          />
          <div className="screenBtn">
            <Link className="linkRoute" to="/DropOffLocationConfirm">
              <Continue buttonVal={state.buttonVal} />
            </Link>
            <Link className="linkRoute" to="/donationType">
              <Goback />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formReducer: state.dropOffLocation
  };
};
export default reduxForm({
  form: "dropOffLocation",
  validate
})(connect(mapStateToProps, null)(DropOffLocationsInputs));
