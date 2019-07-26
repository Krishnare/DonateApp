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
import DropOffItems from "./Components/DropOffItems/DropOffItems";
import DonationType from "./Components/DonationType/DonationType";
import CabinetSets from "./Components/UploadImages/CabinetSets";
import ContactDetails from './Components/ContactInformationForm/ContactDetails';
import ConfirmInformation from './Components/ConfirmInformation/ConfirmInformation';

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
              
              <AuthorisedRoutes path="/" exact component={Welcome} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
