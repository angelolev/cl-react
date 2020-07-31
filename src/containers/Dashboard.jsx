import React from "react";
import SocialArea from "../components/dashboard/SocialArea/SocialArea";
import AsideNavigation from "../components/dashboard/AsideNavigation";
import Articles from "../components/dashboard/Articles/Articles";
// import Money from "../components/dashboard/Money";

const Dashboard = () => {
  return (
    <div className="container">
      <main className="dashboard">
        <AsideNavigation />
        <SocialArea />
        <Articles />
      </main>
    </div>
  );
};

export default Dashboard;
