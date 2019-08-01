import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/commonStyles/commonStyles.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./assets/commonStyles/modal.css";
import "./assets/commonStyles/buttons.css";
import "./App.css";
import "./baseColors.css";
import store from "./store";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import AuthorisedRoutes from "./routes/AuthorisedRoutes";
import Welcome from "./Components/Welcome/Welcome";
import DropOffItems from "./Components/DropOff/DropOffItems/DropOffItems";
import DonationType from "./Components/DropOff/DonationType/DonationType";
import CabinetSets from "./Components/DropOff/UploadImages/CabinetSets";
import ContactDetails from './Components/DropOff/ContactInformationForm/ContactDetails';
import ConfirmInformation from './Components/DropOff/ConfirmInformation/ConfirmInformation';
import ThankYouComponent from './Components/ThankYouPage/ThankYou';
import SelectDropOffLocation from './Components/DropOff/DropOffLocations/SelectDropOffLocation';
import DropOffLocationConfirm from './Components/DropOff/DropOffLocations/DropOffLocationConfirm'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <AuthorisedRoutes path="/dropOffItems" component={DropOffItems} />
              <AuthorisedRoutes path="/donationType" component={DonationType} />
              <AuthorisedRoutes path="/CabinetSets" component={CabinetSets} />
              <AuthorisedRoutes path="/ContactDetails" component={ContactDetails} />
              <AuthorisedRoutes path="/ConfirmInformation" component={ConfirmInformation} />
              <AuthorisedRoutes path="/ThankYouComponent" component={ThankYouComponent} />
              <AuthorisedRoutes path="/SelectDropOffLocation" component={SelectDropOffLocation} />
              <AuthorisedRoutes path="/DropOffLocationConfirm" component={DropOffLocationConfirm} />

              <AuthorisedRoutes path="/" exact component={Welcome} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
