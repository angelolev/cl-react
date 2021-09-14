import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SocialArea from "../../components/dashboard/SocialArea/SocialArea";
import Talks from "../../containers/Talks/Talks";
import RightNavigation from "../../components/dashboard/RigthNavigation";
import LeftNavigation from "../../components/dashboard/LeftNavigation";
// import { UserContext } from "../../providers/UserProvider";

import { Redirect } from "react-router-dom";
const Dashboard = () => {
  // const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  // useEffect(() => {
  //   if (user == null) {
  //     setredirect("/login");
  //   }
  // }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="container">
      <main className="dashboard">
        <button className="logout-button" onClick={console.log("log out")}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
            alt="google icon"
          />
          <span> logout</span>
        </button>
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
