import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;
