import React, { useContext } from "react";
import { shallow, mount } from "enzyme";
import Provider from "../provider";
import { Context } from "../context";

const OriginalProvider = Context.Provider;
Context.Provider = () => null;
Context.Provider.displayName = "Context.Provider";

describe("Provider", () => {
  let initialState;

  const getWrapper = () => mount(<Provider initialState={initialState} />);

  const contextStateShouldBe = (provider, state) => {
    expect(provider.find(Context.Provider).prop("value")).toMatchObject({
      state
    });
  };

  beforeEach(() => {
    initialState = { name: "Marvin" };
  });

  it("should have a default initialstate initializer when it s not passed as props", () => {
    const provider = mount(<Provider />);
    contextStateShouldBe(provider, {});
  });

  it("should have a Context.Provider with props that matches the initial state and the change state handler", () => {
    const wrapper = getWrapper();
    contextStateShouldBe(wrapper, initialState);
  });

  it.skip("should have changed the Context Provider value prop based on state information and parameters", () => {
    const wrapper = getWrapper();

    wrapper
      .find(Context.Provider)
      .prop("value")
      .changeState("name")("Thomas");

    setTimeout(() => console.log(wrapper.debug()), 1000);

    contextStateShouldBe(wrapper, { name: "Thomas" });
  });

  it.skip("should have changed the Context Provider value prop based on state information only", () => {
    const wrapper = getWrapper();

    wrapper
      .find(Context.Provider)
      .prop("value")
      .changeState({ surname: "Thomas" });

    expect(wrapper.find(Context.Provider).prop("value")).toEqual({
      state: { name: "Marvin", surname: "Thomas" },
      changeState: wrapper.instance().changeState
    });
  });
});
