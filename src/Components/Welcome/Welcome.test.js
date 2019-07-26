import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from "enzyme";
import Welcome from "./Welcome";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);

describe("<Welcome /> Component", () => {
  // create initial state needed
  const initialState = {};
  let store;
  let component;
  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState)
    component = mount(
      <Router>
        <Welcome store={store} />
      </Router>
    );
  });
  it('check component renders', () => {
    const wrapper = shallow(
      <Router>
        <Welcome store={store} />
      </Router>
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('Should have the `#homelogo`', () => {
    expect(component.find("#homelogo").exists()).toEqual(true);
  });
  it('Should have the `#btnContinue`', () => {
    expect(component.find('#btnContinue').exists()).toEqual(true);
  });
});
