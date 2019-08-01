import React, { Component } from "react";
import PhotosCount from "./PhotosCount";
import Photos from "./Photos";
import { Link } from "react-router-dom";
import Appliances from "./Appliances";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import "./CabinetSets.css";

class CabinetSets extends Component {
  constructor(){
    super()
    this.state={
      buttonVal:"Continue"
    }
  }
  render() {
    const buttonValue = this.state.buttonValue;
    return (
      <div className="donationContainer">
        <div className="cabinetSetsContainer">
          <h1>Cabinet Sets</h1>
          <div className="photosCount">
            <h4>How many Pieces?</h4>
            <PhotosCount />
            <div className="photos">
              <Photos />
            </div>
          </div>
        </div>
        <Appliances />
        <div className="screenBtn">
          <Link className="linkRoute" to="/SelectDropOffLocation">
            <Continue buttonVal={this.state.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/donationType">
            <Goback />
          </Link>
        </div>
      </div>
    );
  }
}
export default CabinetSets;
