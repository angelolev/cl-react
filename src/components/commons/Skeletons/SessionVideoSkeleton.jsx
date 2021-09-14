import React from "react";
import Skeleton from "react-loading-skeleton";

const SessionVideoSkeleton = () => {
  return (
    <div className="skeleton" style={{ padding: "0" }}>
      <div className="skeleton__video">
        <div className="skeleton__video-mobile">
          <Skeleton height={210} />
        </div>
        <div className="skeleton__video-tablet">
          <Skeleton height={435} />
        </div>
        <div className="skeleton__video-desktop">
          <Skeleton height={470} />
        </div>

        <div className="skeleton__video-title">
          <h1>
            <Skeleton height={50} />
          </h1>
        </div>
        <div className="skeleton__video-description">
          <p style={{ marginBottom: "20px" }}>
            <Skeleton height={20} />
          </p>
          <p>
            <Skeleton height={50} width={150} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionVideoSkeleton;
