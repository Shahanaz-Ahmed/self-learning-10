import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Home = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <h2>This is Home : {categoryCourses.length}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
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
