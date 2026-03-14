import React from "react";
import Context from "./Context";

const Logic = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default Logic;
