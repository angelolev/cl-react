import React from "react";
import CustomSkeleton from "../../elements/Skeleton/Skeleton";

const SessionVideoSkeleton = () => {
  return (
    <div className="skeleton" style={{ padding: "0" }}>
      <div className="skeleton__video">
        <div className="skeleton__video-mobile">
          <CustomSkeleton height={210} />
        </div>
        <div className="skeleton__video-tablet">
          <CustomSkeleton height={435} />
        </div>
        <div className="skeleton__video-desktop">
          <CustomSkeleton height={470} />
        </div>

        <div className="skeleton__video-title">
          <h1>
            <CustomSkeleton height={50} />
          </h1>
        </div>
        <div className="skeleton__video-description">
          <p style={{ marginBottom: "20px" }}>
            <CustomSkeleton height={20} />
          </p>
          <p>
            <CustomSkeleton height={50} width={150} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionVideoSkeleton;
