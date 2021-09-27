import React from "react";

const Input = ({ type, name, id, handleOnChange }) => {
  return <input type={type} name={name} id={id} onChange={handleOnChange} />;
};

export default Input;
