import React from "react";
import closeIcon from "../../assets/images/close-icon.png";

const Photos = () => {
  return (
    <div>
      <h4>Cabinet Photos</h4>
      <div className="photosContainer">
        <div className="photos">
          <div className="uploadPhoto">
            Take Photo or upload
            <br />
            from library
          </div>
          <span className="close">
            <img src={closeIcon} alt="Close" />
          </span>
        </div>
        <div className="photos">
          <div className="uploadPhoto">
            Take Photo or upload
            <br />
            from library
          </div>
          <span className="close">
            <img src={closeIcon} alt="Close" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Photos;
