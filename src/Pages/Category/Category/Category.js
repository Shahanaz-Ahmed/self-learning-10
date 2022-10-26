import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Category = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <h2>This is Category : {categoryCourses.length}</h2>
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
