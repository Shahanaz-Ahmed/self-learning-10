import React from "react";
import { useLoaderData } from "react-router-dom";
import Home from "../../Home/Home/Home";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";

const AllCourse = () => {
  const categoryCourses = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <div>
              <h3>Total Courses Available :{categoryCourses.length}</h3>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                {categoryCourses.map((courses) => (
                  <CourseSummaryCard
                    key={courses._id}
                    courses={courses}
                  ></CourseSummaryCard>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllCourse;
