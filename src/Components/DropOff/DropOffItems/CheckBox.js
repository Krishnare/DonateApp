import React, { useState } from "react";
import ConfirmationBox from "../../../ConfirmationBox";
import { Button } from "reactstrap";

const CheckBox = ({ id, value }) => {
  const [showMessage, setShowMessage] = useState(false);
  console.log("showMessage:", showMessage);
  return (
    <li>
      <input
        className="styled-checkbox"
        id={id}
        type="checkbox"
        value={id}
        name={id}
      />
      <label for={id}>
        <p>{value.description}<br />
        <Button color="link" onClick={() => setShowMessage(true)}>
          {value.criteria}
        </Button>
        </p>
        
        {showMessage && (
          <ConfirmationBox
            headerTitle="Appliances"
            message={value.toolTipDescription}
            hideFooter
            centered
            handleCancelClick={() => setShowMessage(false)}
          />
        )}
      </label>
    </li>
  );
};

export default CheckBox;
