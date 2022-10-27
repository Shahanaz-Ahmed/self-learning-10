import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaDownload, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { Image } from "react-bootstrap";

const Courses = () => {
  const ref = React.createRef();
  const courses = useLoaderData();
  const {
    title,
    _id,
    rating,
    total_enroll,
    total_view,
    instructor,
    details,
    image_url,
    price,
    category_id,
  } = courses;

  return (
    <Card ref={ref} className="w-75 mx-auto">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none" to={`/checkout/${_id}`}>
          <Button variant="outline-info" className="fw-semibold">
            Get Premium Access
          </Button>
        </Link>
        <Pdf targetRef={ref} filename={`course${category_id}.pdf`}>
          {({ toPdf }) => (
            <Button className="bg-light text-dark" onClick={toPdf}>
              <FaDownload></FaDownload>
            </Button>
          )}
        </Pdf>
      </Card.Header>
      <div className="d-flex justify-content-between align-items-center m-3">
        <div className="d-flex">
          <Image
            className="me-2"
            roundedCircle
            src={instructor?.img}
            style={{ height: "60px", width: "60px" }}
          ></Image>
          <div>
            <p className="mb-0">{instructor?.name}</p>
            <p>{instructor?.published_date}</p>
          </div>
        </div>
        <div>
          <h6>Enrolled : {total_enroll}</h6>
        </div>
      </div>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary" className="mb-3">
            All News in this Category
          </Button>
        </Link>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <h5>{price}</h5>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Courses;
