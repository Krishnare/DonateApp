import React from "react";
import CheckBox from "./CheckBox";

const CheckBoxData = props => {
  const { donation, donationType } = props;
  let donationVal = "";
  if (donation !== undefined) {
    donationVal = donation !== undefined ? donation : [];
  } else {
    donationVal = donationType !== undefined ? donationType : [];
  }

  return donationVal.map((value, index) => {
    return <CheckBox key={index} id={index} value={value} />;
  });
};
export default CheckBoxData;
