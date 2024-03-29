import React from "react";

const StudyGroup = ({ group }) => {
  const { link, image, name, description } = group;

  const goToLink = (URL) => {
    window.open(URL, "_blank");
  };

  return (
    <div
      className="group"
      onClick={() => {
        goToLink(link);
      }}
    >
      <div className="group__image">
        <img src={image} alt={name} />
      </div>
      <div className="group__description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StudyGroup;
