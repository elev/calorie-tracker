import React from "react";
import { mount } from "enzyme";
import Main from "../Components/Main";

describe("<ViewMacros />", () => {
  it("Should display macros for the day", () => {
    const wrapper = mount(<Main />);
    const componentInstance = wrapper.childAt(0).instance();

    componentInstance.setState({
      macros: {
        protein: 22,
        fat: 21,
        carbs: 20,
        proteinGoal: 170,
        fatGoal: 160,
        carbGoal: 150
      }
    });

    wrapper.find('[href="/view-macros"]').simulate("click", { button: 0 });

    // use host nodes to get DOM elements
    // https://github.com/airbnb/enzyme/issues/836

    expect(
      wrapper
        .find("#view-protein-goal")
        .hostNodes()
        .text()
    ).toEqual("170");

    expect(
      wrapper
        .find("#view-fat-goal")
        .hostNodes()
        .text()
    ).toEqual("160");

    expect(
      wrapper
        .find("#view-carb-goal")
        .hostNodes()
        .text()
    ).toEqual("150");

    expect(
      wrapper
        .find("#view-fat-consumed")
        .hostNodes()
        .text()
    ).toEqual("21");

    expect(
      wrapper
        .find("#view-carbs-consumed")
        .hostNodes()
        .text()
    ).toEqual("20");

    expect(
      wrapper
        .find("#view-protein-consumed")
        .hostNodes()
        .text()
    ).toEqual("22");
  });
});
