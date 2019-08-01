import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import ContactDetails from "../../DropOff/ContactInformationForm/ContactDetails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import "./ConfirmInformation.css";

import store from "../../../store";
store.getState();
class ReviewAndConfirm extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      values: {},
      buttonVal: "Confirm"
    };
  }
  componentWillMount() {
    this.setState({
      values: this.props.formReducer
    });
  }
  render() {
    let propsValues =
      Object.keys(this.state.values).length !== 0 ? this.state.values : [];
    return (
      <div className="contactIformationValues">
        <h5>Review and Confirm your Information</h5>
        <div className="catogoryImg">
          <div className="subHeading">Pick up Items</div>
          <div className="subValues">1x Kitchen Cabinet</div>
        </div>
        <div className="personDetails">
          <ul>
            <li>
              <div className="subHeading">Full Name</div>
              <div className="subValues">
                {propsValues.contact.values.fullName}
              </div>
            </li>
            <li>
              <div className="subHeading">Email</div>
              <div className="subValues">
                {propsValues.contact.values.email}
              </div>
            </li>
            <li>
              <div className="subHeading">Phone Number</div>
              <div className="subValues">
                {propsValues.contact.values.phoneNumber}
              </div>
            </li>
            <li>
              <div className="subHeading">Address</div>
              <div className="subValues">
                {propsValues.contact.values.zipCode},{" "}
                {propsValues.contact.values.city},{" "}
                {propsValues.contact.values.streetAddress}
              </div>
            </li>
          </ul>
        </div>
        <div className="pickupSchedule">
          <div className="subHeading">Pick up Schedule</div>
          <div className="subValues">Our Donation Team Will Contact you</div>
        </div>
        <div className="screenBtn">
          <Link className="linkRoute" to="/ThankYouComponent">
            <Continue buttonVal={this.state.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/CabinetSets">
            <Goback />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formReducer: state.formReducer
});
export default connect(
  mapStateToProps,
  null
)(ReviewAndConfirm);
