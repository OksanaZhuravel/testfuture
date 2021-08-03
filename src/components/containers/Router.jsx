import React from "react";
import {Switch, Route } from "react-router-dom";
import Layout from "./Layout";

export default function  Router () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/saved" component={Layout} />
      </Switch>
    </Router>
  )
};
