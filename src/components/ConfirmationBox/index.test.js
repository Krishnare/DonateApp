import React from "react";
import { shallow } from "enzyme";
import ConfirmationBox from "./index";

it("renders ConfirmationBox without crashing", () => {
  const wrapper = shallow(<ConfirmationBox props={{}} />);
  expect(wrapper).toMatchSnapshot();
});
