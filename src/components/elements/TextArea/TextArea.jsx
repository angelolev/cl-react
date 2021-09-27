import React from "react";

const TextArea = ({ name, rows, cols, handleOnChange, value }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      onChange={handleOnChange}
      placeholder="Escribe algo aquí"
    ></textarea>
  );
};

export default TextArea;
