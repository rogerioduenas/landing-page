import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Verification from "./Pages/verification/verification";
import Offers from "./Pages/offers/offers";



function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Verification} />
          <Route path="/offers" component={Offers} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
