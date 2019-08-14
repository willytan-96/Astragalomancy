import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Component from "./pages/Components";

export default props => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={Welcome} />
      <Route path="/components" exact component={Component} />
    </BrowserRouter>
  );
};
