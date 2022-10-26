import React from "react";
import { useLoaderData } from "react-router-dom";
import Home from "../../Home/Home/Home";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const AllCourse = () => {
  const categoryCourses = useLoaderData();
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
      {categoryCourses.map((courses) => (
        <CourseSummaryCard
          key={courses._id}
          courses={courses}
        ></CourseSummaryCard>
      ))}
    </div>
  );
};

export default AllCourse;
