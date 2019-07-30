import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Link } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import Continue from "../Buttons/Continue";
import Goback from "../Buttons/Goback";
import InfoText from "../infoText/infoText";
import RenderField from "./renderField";
import { connect } from "react-redux";
// import ReviewAndConfirm from "../ConfirmInformation/ConfirmInformation"

import "./AddressDetails.css";
// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );
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
  if (!values.streetAddress) {
    errors.streetAddress = "Required";
  } else if (values.streetAddress.length < 2) {
    errors.streetAddress = "Minimum be 2 characters or more";
  }
  errors.zipCode = "Required";
  if (!values.zipCode) {
    errors.zipCode = "Required";
  } else if (values.zipCode.length < 2) {
    errors.zipCode = "Minimum be 2 characters or more";
  }
  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length < 2) {
    errors.city = "Minimum be 2 characters or more";
  }
  return errors;
};
const onSubmit = value => {
  alert(value);
};
const PersonContactDetails = ({ handleSubmit, submitting }, props) => {
  let buttonValues = {
    buttonValue: "Confirm"
  };
  //   constructor() {
  //     super();
  //     this.state = {
  //       buttonValue: "Confirm"
  //     };
  //     this.state = {
  //       fullName: null,
  //       email: null,
  //       phoneNumber: null,
  //       buttonValue: "Confirm",
  //       fullError: "",
  //       value: "",
  //       errors: {
  //         fullName: "",
  //         email: "",
  //         phoneNumber: ""
  //       }
  //     };
  //   }
  //   handleChange = event => {
  //     event.preventDefault();
  //     const { name, value } = event.target;
  //     let errors = this.state.errors;
  //     const validEmailRegex = RegExp(
  //       /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  //     );
  //     switch (name) {
  //       case "fullName":
  //         errors.fullName =
  //           value.length < 5 ? "Full Name must be 5 characters long!" : "";
  //         break;
  //       case "email":
  //         errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
  //         break;
  //       case "phoneNumber":
  //         errors.phoneNumber =
  //           value.length < 10 ? "phoneNumber must be 10 characters long!" : "";
  //         break;
  //       default:
  //         break;
  //     }

  //     this.setState({ errors, [name]: value }, () => {
  //     //   console.log(errors);
  //     });
  //   };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     const { fullName, email, phoneNumber } = this.state.errors;
  //     console.log('phoneNumber:', fullName, email, phoneNumber);
  //     if (this.validateForm(this.state.errors)) {

  //     } else {
  //         this.setState({
  //             fullError: "",
  //             errorClass: ""
  //           });
  //     }
  //   };
  //   handleSubmit=(values)=>{
  //     console.log(values);
  //   }
  //   validateForm = errors => {
  //     let valid = true;
  //     Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  //     return valid;
  //   };

  return (
    <div className="contactForms">
      <h5>Contact Details</h5>
      <form className="addressDetails" onSubmit={handleSubmit}>
        {/* <span className="error">{fullError}</span> */}
        <Field
          name="fullName"
          component={RenderField}
          type="text"
          // handleChange={this.handleChange}
          placeholder="Full Name"
          // value={value}
          noValidate
          // className={errorClass}
        />

        {/* {errors.fullName.length > 0 && (
            <span className="error">{errors.fullName}</span>
          )} */}

        <Field
          name="email"
          component={RenderField}
          type="email"
          // handleChange={this.handleChange}
          placeholder="Email"
          // value={this.value}
          // className={errorClass}
          noValidate
        />
        {/* {errors.email.length > 0 && (
            <span className="error">{errors.email}</span>
          )} */}
        <Field
          name="phoneNumber"
          component={RenderField}
          type="number"
          // handleChange={this.handleChange}
          placeholder="Mobile Number"
          // value={this.value}
          // className={errorClass}
          noValidate
        />
        {/* {errors.phoneNumber.length > 0 && (
            <span className="error">{errors.phoneNumber}</span>
          )} */}
        <AddressDetails />
        <InfoText />
        <div className="screenBtn">
          <Link className="linkRoute" to="/ConfirmInformation">
            <Continue buttonVal={buttonValues.buttonValue} />
          </Link>
          <Link className="linkRoute" to="/SelectDropOffLocation">
            <Goback />
          </Link>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    formReducer: state.contact
  };
};
export default reduxForm({
  form: "contact",
  onSubmit,
  validate
})(connect(mapStateToProps)(PersonContactDetails));
