import React, { Component } from "react";
import PhotosCount from "./PhotosCount";
import Photos from "./Photos";
import { Link } from "react-router-dom";
import Continue from "../../Buttons/Continue";
import Goback from "../../Buttons/Goback";
import "./CabinetSets.css";
class Appliances extends Component {
  render() {
    return (
      <div className="apliancesContainer">
        <h1>Appliances</h1>
        <div className="photosCount">
          <h4>How many Appliances?</h4>
          <PhotosCount />
          <div className="photos">
            <Photos />
          </div>
        </div>
      </div>
    );
  }
}
export default Appliances;
