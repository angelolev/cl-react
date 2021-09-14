import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__card">
        <Skeleton height={160} />
        <h2>
          <Skeleton height={30} />
        </h2>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <Skeleton height={160} />
        <h2>
          <Skeleton height={30} />
        </h2>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <Skeleton height={160} />
        <h2>
          <Skeleton height={30} />
        </h2>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={40} width={120} />
        </p>
      </div>
      <div className="skeleton__card">
        <Skeleton height={160} />
        <h2>
          <Skeleton height={30} />
        </h2>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={15} />
        </p>
        <p>
          <Skeleton height={40} width={120} />
        </p>
      </div>
    </div>
  );
};

export default CardSkeleton;
