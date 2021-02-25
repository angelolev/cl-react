import React from "react";
import Student from "../../components/join-us/JoinUsStudent";

const JoinUsStudent = (props) => {
  const { type } = props;

  return (
    <div className="container">
      <section className="join">
        <h1>Se parte de la comunidad</h1>
        <Student />
      </section>
    </div>
  );
};

export default JoinUsStudent;
