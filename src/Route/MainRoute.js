import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Kitchen from "../Pages/Kitchen/index";
import Login from "../Pages/Login/index";
import Admin from "../Pages/Admin/index";

export default function MainRoute() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/:name/Cashier" children={<Admin />} />
        <PrivateRoute path="/:name/kitchen" children={<Kitchen />} />
        <Route path="/" children={<Login />} />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
