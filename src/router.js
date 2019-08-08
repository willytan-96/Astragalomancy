import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
    </BrowserRouter>
  );
};
