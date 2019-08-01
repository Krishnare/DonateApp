import React, { Component } from "react";
import futuroIcons from "../../../assets/images/futuro-icons-207.svg";
import { Link } from "react-router-dom";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import CheckBoxes from "../DropOffItems/CheckBoxes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import checkBoxesDescripiton from "../../data/data";
import { requestApiData } from "../../../redux/actions/uiUserActions-actions";

import "./DropOffItems.css";

class DropOffItems extends Component {
  constructor(){
    super();
    this.state={
      buttonVal:"Continue"
    }
  }
  render() {
    const buttonValue = this.state.buttonValue;
    let donation = this.props.uiUserActionsReducer.response;
    donation = donation !== undefined ? donation : [];
    return (
      <div className="dropOffItemsContainer">
        <div className="futuroIcon">
          <img src={futuroIcons} alt="futuroIcons" />
        </div>
        <h4>Donation Criteria</h4>
        <div>
          <ul className="checkBoxContainer">
            <CheckBoxes donation={donation.donation} />
          </ul>
        </div>
        <div className="screenBtn">
          <Link className="linkRoute" to="/donationType">
            <Continue buttonVal={this.state.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/">
            <Goback />
          </Link>
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
)(DropOffItems);
