import React from "react";
import { mount } from "enzyme";
import Main from "../components/Main";

describe("<Exercise />", () => {
  it("exercise should update mains calories", () => {
    const wrapper = mount(<Main />);
    const componentInstance = wrapper.childAt(0).instance();

    componentInstance.setState({ calorieCount: 500 });
    expect(componentInstance.state.calorieCount).toEqual(500);

    wrapper.find('[href="/add-exercise"]').simulate("click", { button: 0 });

    wrapper
      .find('input[name="calories"]')
      .simulate("change", { target: { value: 300 } });

    wrapper.find("form#addExercise").simulate("submit");

    expect(componentInstance.state.calorieCount).toEqual(200);
    expect(componentInstance.state.flashMessageOpen).toEqual(true);
    expect(componentInstance.state.flashMessageText).toEqual(
      "Daily Calories Updated"
    );
  });
});
