import React from "react";
import { mount } from "enzyme";
import Main from "../Components/Main";

describe("<Goals />", () => {
  it("updates goals", () => {
    const wrapper = mount(<Main />);
    const componentInstance = wrapper.childAt(0).instance();

    wrapper.find('[href="/goals"]').simulate("click", { button: 0 });

    wrapper
      .find('input[name="calories"]')
      .simulate("change", { target: { value: 2050 } });

    wrapper
      .find('input[name="proteinGoal"]')
      .simulate("change", { target: { value: 150 } });

    wrapper
      .find('input[name="carbGoal"]')
      .simulate("change", { target: { value: 450 } });

    wrapper
      .find('input[name="fatGoal"]')
      .simulate("change", { target: { value: 50 } });

    wrapper.find("form#updateGoals").simulate("submit");

    expect(componentInstance.state.dailyGoal).toEqual(2050);
    expect(componentInstance.state.macros.fatGoal).toEqual(50);
    expect(componentInstance.state.macros.proteinGoal).toEqual(150);
    expect(componentInstance.state.macros.carbGoal).toEqual(450);
  });
});
