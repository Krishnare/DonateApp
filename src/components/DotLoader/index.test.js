import React from "react";
import { shallow } from "enzyme";
import DotLoader from "./index";

it("renders DotLoader without crashing", () => {
  const wrapper = shallow(<DotLoader />);
  expect(wrapper).toMatchSnapshot();
});
