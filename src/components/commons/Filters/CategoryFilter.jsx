import React from "react";

const Category = (props) => {
  const handlefilter = () => {
    console.log(props.name);
  };

  return <li onClick={() => handlefilter}>{props.name}</li>;
};

export default Category;
