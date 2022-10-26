import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Courses = () => {
  const courses = useLoaderData();
  const {
    title,
    _id,
    total_view,
    instructor,
    details,
    image_url,
    price,
    category_id,
  } = courses;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All News in this Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Courses;
