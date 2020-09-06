import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SocialArea from "../../components/dashboard/SocialArea/SocialArea";
import Talks from "../../containers/Talks/Talks";
import RightNavigation from "../../components/dashboard/RigthNavigation";
import LeftNavigation from "../../components/dashboard/LeftNavigation";

const Dashboard = () => {
  return (
    <div className="container">
      <main className="dashboard">
        <BrowserRouter>
          <LeftNavigation />
          <Switch>
            <Route exact path="/dashboard" component={SocialArea} />
            <Route
              exact
              path="/dashboard/lasttalks"
              component={() => <Talks isDashboard="" />}
            />
          </Switch>
          <RightNavigation />
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Dashboard;
