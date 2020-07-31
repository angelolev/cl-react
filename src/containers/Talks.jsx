import React, { useState, useEffect } from "react";
import Talk from "../components/Talk";

const Talks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    fetch("https://coding-latam.firebaseio.com/talks.json").then((response) =>
      response.json().then((responseData) => {
        const loadedTalks = [];
        for (const key in responseData) {
          loadedTalks.push({
            id: key,
            description: responseData[key].description,
            date: responseData[key].date,
            calendarLink: responseData[key].calendarLink,
            image: responseData[key].image,
          });
        }
        setTalks(loadedTalks);
      })
    );
  }, []);

  return (
    <div>
      <section className="talks">
        {talks.map((talk) => {
          return (
            <Talk
              key={talk.id}
              description={talk.description}
              date={talk.date}
              link={talk.calendarLink}
              image={talk.image}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Talks;
