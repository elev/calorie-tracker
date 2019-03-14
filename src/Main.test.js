import React from "react";
import ReactDOM from "react-dom";
// the next three lines need to go into setup file
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import Main from "./Components/Main";

Enzyme.configure({ adapter: new Adapter() });

describe("<Main />", () => {
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Main />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it("updates goals", () => {
    const wrapper = mount(<Main />);
    wrapper.find('[href="/goals"]').simulate("click", { button: 0 });

    wrapper
      .find('input[name="calories"]')
      .simulate("change", { target: { value: 2050 } });

    wrapper
      .find('input[name="protein"]')
      .simulate("change", { target: { value: 150 } });

    wrapper
      .find('input[name="carbs"]')
      .simulate("change", { target: { value: 450 } });

    wrapper
      .find('input[name="fat"]')
      .simulate("change", { target: { value: 50 } });

    console.log(wrapper.debug());

    // console.log(wrapper.find("#calories"));
    //  expect(wrapper.exists(".some-class")).to.equal(true); //wrapper.find("#calories").simulate("click");
  });
});
