import React from "react";
import { mount } from "enzyme";
import moment from "moment";
import Main from "../components/Main";

jest.useFakeTimers();

describe("<Main />", () => {
  it("should clear when it hits end of day", () => {
    const wrapper = mount(<Main />);
    const componentInstance = wrapper.childAt(0).instance();

    expect(componentInstance.state.dayEnd).toEqual(moment().endOf("day"));

    componentInstance.clearEndOfDayTimeout();

    componentInstance.setState({
      dayEnd: moment().add(5, "seconds"),
      calorieCount: 2100,
      macros: {
        protein: 100,
        fat: 100,
        carbs: 100
      }
    });

    expect(componentInstance.state.calorieCount).toEqual(2100);
    expect(componentInstance.state.macros).toEqual({
      protein: 100,
      fat: 100,
      carbs: 100
    });

    componentInstance.setEndOfDayTimeout();
    jest.advanceTimersByTime(5500);

    expect(componentInstance.state.calorieCount).toEqual(0);
    expect(componentInstance.state.macros).toEqual({
      protein: 0,
      fat: 0,
      carbs: 0
    });
  });
});
