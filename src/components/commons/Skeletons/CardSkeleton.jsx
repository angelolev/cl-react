import React from "react";
import CustomSkeleton from "../../elements/Skeleton/Skeleton";

const CardSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__card">
        <CustomSkeleton height={160} />
        <h2>
          <CustomSkeleton height={30} />
        </h2>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <CustomSkeleton height={160} />
        <h2>
          <CustomSkeleton height={30} />
        </h2>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <CustomSkeleton height={160} />
        <h2>
          <CustomSkeleton height={30} />
        </h2>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <CustomSkeleton height={160} />
        <h2>
          <CustomSkeleton height={30} />
        </h2>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={15} />
        </p>
        <p>
          <CustomSkeleton height={40} width={120} />
        </p>
      </div>
    </div>
  );
};

export default CardSkeleton;
