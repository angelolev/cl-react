import React from "react";
import AsideNavigation from "./AsideNavigation";
import Membership from "./Membership/Membership";

const LeftNavigation = () => {
  return (
    <aside className="left-navigation">
      <AsideNavigation />
      <Membership />
    </aside>
  );
};

export default LeftNavigation;
