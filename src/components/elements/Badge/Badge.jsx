import React from "react";

const Badge = (props) => {
  const { elementClass, handleClick, name } = props;
  return (
    <li className={elementClass} onClick={handleClick}>
      {name}
    </li>
  );
};

export default Badge;
