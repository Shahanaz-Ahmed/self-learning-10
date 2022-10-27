import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Category = () => {
  const categoryCourses = useLoaderData();
  return (
    <div className="w-50 mx-auto">
      <h3>This Category have: {categoryCourses.length} course available</h3>
      {categoryCourses.map((courses) => (
        <CourseSummaryCard
          key={courses._id}
          courses={courses}
        ></CourseSummaryCard>
      ))}
    </div>
  );
};

export default Category;
