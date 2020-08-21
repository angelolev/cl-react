import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SocialArea from "../components/dashboard/SocialArea/SocialArea";
import AsideNavigation from "../components/dashboard/AsideNavigation";
import Articles from "../components/dashboard/Articles/Articles";
import Talks from "../containers/Talks";

const Dashboard = () => {
  return (
    <div className="container">
      <main className="dashboard">
        <BrowserRouter>
          <AsideNavigation />
          <Switch>
            <Route exact path="/dashboard" component={SocialArea} />
            <Route
              exact
              path="/dashboard/lasttalks"
              component={() => <Talks isDashboard="" />}
            />
          </Switch>
          <Articles />
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Dashboard;
