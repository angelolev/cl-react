import React from "react";
import "loaders.css/loaders.css";

const Loader = () => {
  return (
    <div className="loader" style={{ paddingTop: "100px" }}>
      <div className="loader-inner ball-pulse">
        <div style={{ background: "#333" }}></div>
        <div style={{ background: "#333" }}></div>
        <div style={{ background: "#333" }}></div>
      </div>
    </div>
  );
};

export default Loader;
