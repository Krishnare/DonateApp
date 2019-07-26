import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import ContactDetails from "../ContactInformationForm/ContactDetails";
import { connect } from "react-redux";

import store from "../../store";
store.getState();
class ReviewAndConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: null
    };
  }
  componentDidMount() {
    this.setState({
      values: this.props.formReducer
    });
  }

  render() {
      let propsValues = Object.keys(this.props.formReducer).length !== 0 ?  this.props.formReducer : [];
    return (
      <div>
        <ul>
          <li>{propsValues.contact.values.fullName}</li>
        </ul>
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
