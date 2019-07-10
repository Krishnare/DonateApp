import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class AuthorizedRoutes extends Component {
  render() {
    return (
      <div>
        <Route
          path={this.props.path}
          component={this.props.component}
          {...this.props}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorizedRoutes)
);
