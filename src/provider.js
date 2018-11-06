import React, { useState } from "react";
import { Context } from "./context";

const Provider = ({ initialState = {}, children }) => {
  const [state, setState] = useState(initialState);

  const changeState = storeKey => newState => {
    if (storeKey) setState({ ...state, [storeKey]: newState });
    else setState({ ...state, ...newState });
  };

  return (
    <Context.Provider value={{ state, changeState }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
