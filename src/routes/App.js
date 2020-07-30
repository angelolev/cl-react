import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Groups from "../containers/Groups";
import Talks from "../containers/Talks";
import Layout from "../components/Layout";
import Dashboard from "../containers/Dashboard";
// import Cursos from "../containers/Cursos";
// import Proyectos from "../containers/Proyectos";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/cursos" component={Cursos} /> */}
        <Route exact path="/grupos" component={Groups} />
        <Route exact path="/talks" component={Talks} />
        {/* <Route exact path="/proyectos" component={Proyectos} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
