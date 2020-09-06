import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Groups from "../containers/Groups";
import Talks from "../containers/Talks";
import Layout from "../components/Layout";
import Dashboard from "../containers/Dashboard";
import Calendar from "../containers/Calendar";
import Live from "../containers/Live/Live";
import GroupHtml from "../components/groups/GroupHtml";

import "../styles.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/grupos" component={Groups} />
        <Route exact path="/grupos/html" component={GroupHtml} />
        <Route
          exact
          path="/talks"
          component={() => <Talks isDashboard="true" />}
        />
        <Route exact path="/calendario" component={Calendar} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
