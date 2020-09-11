import React from "react";
import "loaders.css/loaders.css";

const Loader = () => {
  return (
    <div
      className="loader__container"
      style={{ textAlign: "center", padding: "150px 0" }}
    >
      <div className="loader">
        <div className="loader-inner ball-pulse">
          <div style={{ background: "#333" }}></div>
          <div style={{ background: "#333" }}></div>
          <div style={{ background: "#333" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
