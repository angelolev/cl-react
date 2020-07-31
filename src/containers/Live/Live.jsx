import React from "react";
import LiveVideo from "../../components/live/LiveVideo";
import LastTalks from "../../components/dashboard/LastTalks/LastTalks";

const Live = () => {
  return (
    <div className="container">
      <section className="live">
        <LiveVideo />
        <LastTalks />
      </section>
    </div>
  );
};

export default Live;
