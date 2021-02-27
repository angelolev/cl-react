import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Groups from "../containers/Groups/Groups";
import Talks from "../containers/Talks/Talks";
import Layout from "../components/Layout";
import Admin from "../containers/Admin/Admin";
import Dashboard from "../containers/Dashboard/Dashboard";
import Calendar from "../containers/Calendar/Calendar";
import Live from "../containers/Live/Live";
import GroupHtml from "../components/groups/GroupHtml";
import SessionVideo from "../components/groups/SessionVideo";
import Course from "../containers/Course/Course";
import JoinUsStudent from "../containers/JoinUs/JoinUsStudent";
import JoinUsMentor from "../containers/JoinUs/JoinUsMentor";
import NotFound from "../containers/NotFound/NotFound";

import "../styles.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/admin/recursos" component={Admin} />
        <Route exact path="/cursos/desarrollo-web" component={Course} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/grupos" component={Groups} />
        <Route exact path="/clases" component={GroupHtml} />
        <Route exact path="/clases/:group/:link" component={SessionVideo} />
        <Route
          exact
          path="/talks"
          component={() => <Talks isDashboard="true" />}
        />
        <Route exact path="/calendario" component={Calendar} />
        <Route exact path="/estudiante" component={JoinUsStudent} />
        <Route exact path="/mentor" component={JoinUsMentor} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
