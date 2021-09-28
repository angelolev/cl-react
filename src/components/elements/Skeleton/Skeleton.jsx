import React from "react";
import Skeleton from "react-loading-skeleton";

const CustomSkeleton = ({ height, width }) => {
  return <Skeleton height={height} width={width} />;
};

export default CustomSkeleton;
