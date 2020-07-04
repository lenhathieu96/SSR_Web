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
        <AdminRoute  path="/:name/Dashboard" children ={<Admin />} />
        <KitchenRoute  path="/:name/Kitchen" children={<Kitchen />} />
        <Route path="/" children={<Login />} />
      </Switch>
    </Router>
  );
}

function AdminRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("manToken") ? (
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

function KitchenRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("kitToken") ? (
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
