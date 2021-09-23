import React, { useEffect } from "react";
import RecommendedCourseCard from "../RecommendedCourses/RecommendedCourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedCoursesFirebase } from "../../../store/actions/recommendedCourses-actions";
import CardSkeleton from "../Skeletons/CardSkeleton";

const RecommendedCourses = () => {
  const dispatch = useDispatch();
  const recommendedCourses = useSelector((state) => state.recommendedCourses);

  useEffect(() => {
    dispatch(getRecommendedCoursesFirebase());
  }, []);

  return (
    <div className="recommended-courses">
      <div className="recommended-courses__content">
        <div className="recommended-courses__intro">
          <h2 id="description">¿Qué es lo que hacemos?</h2>
          <p>
            Compartimos conocimiento(talleres, workshops, cursos, etc) apoyando
            a los profesionales que inician en el mundo del desarrollo web.
          </p>
        </div>
        {recommendedCourses?.courses !== null ? (
          recommendedCourses?.courses?.map((course) => (
            <RecommendedCourseCard course={course} key={course.id} />
          ))
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
};

export default RecommendedCourses;
