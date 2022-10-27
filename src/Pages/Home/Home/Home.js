import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const Home = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <h3 className="text-center">Learning never exhausts the mind.</h3>
      <p className="fs-5 text-center ">
        Grow your career with quality education.Start learning from the worlds
        best site.
      </p>
      <div className="d-flex justify-content-center">
        <img
          className="w-100 h-100"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
        {categoryCourses.map((courses) => (
          <CourseSummaryCard
            key={courses._id}
            courses={courses}
          ></CourseSummaryCard>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
