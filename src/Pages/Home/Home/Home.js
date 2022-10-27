import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Home = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <h3>Learning never exhausts the mind.</h3>
      <p className="fs-5">
        Grow your career with quality education.Start learning from the worlds
        best site.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
        {categoryCourses.map((courses) => (
          <CourseSummaryCard
            key={courses._id}
            courses={courses}
          ></CourseSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
