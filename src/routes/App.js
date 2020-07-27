import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Groups from "../containers/Groups";
import Talks from "../containers/Talks";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grupos" component={Groups} />
        <Route exact path="/talks" component={Talks} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
