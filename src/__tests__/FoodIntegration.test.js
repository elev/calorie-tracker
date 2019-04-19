import React from "react";
import { mount } from "enzyme";
import Main from "../Components/Main";

describe("<Food />", () => {
  it("Food should update Main's calories and macros", () => {
    const wrapper = mount(<Main />);
    const componentInstance = wrapper.childAt(0).instance();

    wrapper.find('[href="/add-food"]').simulate("click", { button: 0 });

    wrapper
      .find('input[name="calories"]')
      .simulate("change", { target: { value: 410 } });

    wrapper
      .find('input[name="protein"]')
      .simulate("change", { target: { value: 20 } });

    wrapper
      .find('input[name="carbs"]')
      .simulate("change", { target: { value: 47 } });

    wrapper
      .find('input[name="fat"]')
      .simulate("change", { target: { value: 16 } });

    wrapper.find("form#addFood").simulate("submit");

    expect(componentInstance.state.calorieCount).toEqual(410);
    expect(componentInstance.state.macros.fat).toEqual(16);
    expect(componentInstance.state.macros.protein).toEqual(20);
    expect(componentInstance.state.macros.carbs).toEqual(47);
    expect(componentInstance.state.flashMessageOpen).toEqual(true);
    expect(componentInstance.state.flashMessageText).toEqual(
      "Daily Calories Updated"
    );
  });
});
