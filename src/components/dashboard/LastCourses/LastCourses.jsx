import React, { useState, useEffect } from "react";
import LastCourse from "./LastCourse";
import { db } from "../../../services/firebase";

const LastCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.collection("recommendedCourses").orderBy("id","desc").limit(3).get().then((querySnapshot) => {
      const lastCourses = [];
      querySnapshot.forEach((doc) => {
        lastCourses.push(doc.data());
      });
      setCourses(lastCourses);
    });
    // fetch("https://coding-latam.firebaseio.com/talks.json").then((response) =>
    //   response.json().then((responseData) => {
    //     const loadedCourses = [];
    //     for (const key in responseData) {
    //       loadedCourses.push({
    //         id: key,
    //         title: responseData[key].title,
    //         description: responseData[key].description,
    //         image: responseData[key].image,
    //       });
    //     }
    //     setCourses(loadedCourses);
    //   })
    // );
  }, []);

  return (
    <div className="last-talks">
      <h2>Últimos cursos</h2>
      {courses.map((course) => (
        <LastCourse
          key={course.id}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default LastCourses;
