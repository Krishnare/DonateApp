import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { requestApiData } from "../../redux/actions/uiUserActions-actions";
import donationTypeImg from "../../assets/images/donation-type.jpg";
import Continue from "../Buttons/Continue";
import Goback from "../Buttons/Goback";
import CheckBoxes from "../DropOffItems/CheckBoxes";
import dropOffItems from "../DropOffItems/DropOffItems"

import "./DonationType.css";

class DonationType extends Component {
  constructor(){
    super();
    this.state={
      buttonVal:"Continue"
    }
  }
  render() {
    const buttonValue = this.state.buttonValue;
    let donationType = this.props.uiUserActionsReducer.response;
    donationType = donationType !== undefined ? donationType : [];
    return (
      <div className="donationTypeContainer">
        <div className="donationTypeimg">
          <div>
            <img src={donationTypeImg} alt="Donation Type" />
          </div>
        </div>
        <div>
          <div className="bodyCopyContainer">
            <h4>What will you be donating?</h4>
            <ul className="checkBoxContainer donationType">
              <CheckBoxes donationType={donationType.donateTyps} />
            </ul>

            <div className="screenBtn">
              <Link className="linkRoute" to="/CabinetSets">
                <Continue buttonVal={this.state.buttonVal} />
              </Link>
              <Link className="linkRoute" to="/dropOffItems">
                <Goback />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uiUserActionsReducer: state.uiUserActionsReducer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestApiData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationType);
