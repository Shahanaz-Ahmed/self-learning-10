import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Checkout = () => {
  const courses = useLoaderData();
  const {
    title,
    _id,
    total_enroll,
    instructor,
    details,
    image_url,
    price,
    category_id,
  } = courses;
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
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
        </Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
