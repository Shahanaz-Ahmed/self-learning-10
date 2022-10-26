import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Courses = () => {
  const ref = React.createRef();
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
    <Card ref={ref}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Pdf targetRef={ref} filename={`course${category_id}.pdf`}>
          {({ toPdf }) => (
            <Button className="bg-light text-dark" onClick={toPdf}>
              <FaDownload></FaDownload>
            </Button>
          )}
        </Pdf>
      </Card.Header>
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
