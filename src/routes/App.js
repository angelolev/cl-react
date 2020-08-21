import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Groups from "../containers/Groups";
import Talks from "../containers/Talks";
import Layout from "../components/Layout";
import Dashboard from "../containers/Dashboard";
import Live from "../containers/Live/Live";

import "../styles.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/grupos" component={Groups} />
        <Route
          exact
          path="/talks"
          component={() => <Talks isDashboard="true" />}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
