import React from "react";

const photosCount = () => {
  return (
    <ul className="photosCountNumbers">
      <li className="selected">
        <span>1</span>
      </li>
      <li>
        <span>2</span>
      </li>
      <li>
        <span>3</span>
      </li>
      <li>
        <input
          type="text"
          name="photoCount"
          placeholder="or enter"
          id="photoCount"
        />
      </li>
    </ul>
  );
};
export default photosCount;
