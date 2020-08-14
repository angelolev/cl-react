import React, { useState, useEffect } from "react";
import Talk from "../components/commons/Talk";
import HeaderSection from "../components/commons/HeaderSection";
import { db } from "../services/firebase";

const Talks = (props) => {
  const [talks, setTalks] = useState([]);
  const [isDashboard, setIsDashboard] = useState(props.isDashboard);
  let talkClass = "talk";

  if (!isDashboard) {
    talkClass += " talk-dashboard";
  }

  useEffect(() => {
    db.collection("talks")
      .get()
      .then((querySnapshot) => {
        const loadedTalks = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedTalks.push(currentDoc);
        });
        setTalks(loadedTalks);
      });
  }, []);

  return (
    <div>
      {isDashboard ? <HeaderSection /> : ""}

      <section className="talks">
        {talks.map((talk) => {
          return (
            <Talk
              key={talk.id}
              description={talk.description}
              date={talk.date}
              link={talk.calendarLink}
              image={talk.image}
              classname={talkClass}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Talks;
