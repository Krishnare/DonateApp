import React from "react";
import { shallow } from "enzyme";
import SpinLoader from "./index";

describe("<SpinLoader /> Component", () => {
  it("check component renders", () => {
    const wrapper = shallow(<SpinLoader />);
    expect(wrapper.exists()).toBe(true);
  });
});
