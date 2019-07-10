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
import ReduxToastr from "react-redux-toastr";
import AuthorisedRoutes from "./routes/AuthorisedRoutes";
import Welcome from "./containers/Welcome/Welcome";
import DropOffItems from "./containers/DropOffItems/DropOffItems";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <AuthorisedRoutes path="/dropOffItems" component={DropOffItems} />
              <AuthorisedRoutes path="/" exact component={Welcome} />
            </Switch>
          </Router>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </div>
      </Provider>
    );
  }
}

export default App;
