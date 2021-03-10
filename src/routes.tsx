import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/Index/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
