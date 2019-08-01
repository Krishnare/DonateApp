import React, { Component } from "react";
import { connect } from "react-redux";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import { Link } from "react-router-dom";
import SelectAddress from "./SelectAddress";
import { Field, reduxForm, formValueSelector } from "redux-form";

class DropOffLocationConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propsVal: "",
      buttonVal: "Confirm"
    };
  }
  componentWillMount() {
    this.setState({
      propsVal: this.props
    });
    console.log("this.props.DropOffLocation", this.props);
    if (this.props.formReducer !== undefined) {
      localStorage.setItem("dropOffLocation", JSON.stringify(this.props.formReducer));
      console.log('LocalStorage', localStorage.getItem('dropOffLocation'));
    }
  }
  render() {
    let dropOffLocation = localStorage.getItem('dropOffLocation');
    let converted = JSON.parse(dropOffLocation);

    console.log("this.props.DropOffLocation", converted.dropOffLocation.values);
    return (
      <div className="confirmLoactionContainer">
        <h5>Select a Drop Off Location</h5>
        <div className="dropLocation commonBox">
        
        <SelectAddress />
        </div>
        <div className="dropItems items commonBox" >
        <span className="labelName">Drop Off Item 1</span>
        <span>1x Kitchen Cabinet</span>
        </div>
        <div className="dropItems items commonBox">
          <span className="labelName">Drop Off Item 2</span>
          <span>Appliances</span>
        </div>
        <div className="contactInfo commonBox">
          <span className="labelName">Full Name</span>
          <span>{converted.dropOffLocation.values.FullName}</span>
          <span className="labelName">Email</span>
          <span>{converted.dropOffLocation.values.Email}</span>
          <span className="labelName">Phone Number</span>
          <span>{converted.dropOffLocation.values.phoneNumber}</span>

          <span className="labelName">Description</span>
        </div>
        <div className="screenBtn">
          <Link className="linkRoute" to="/ThankYouComponent">
            <Continue buttonVal={this.state.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/SelectDropOffLocation">
            <Goback />
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formReducer: state.formReducer
  };
};

export default connect(mapStateToProps)(DropOffLocationConfirm);
