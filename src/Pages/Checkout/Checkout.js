import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { FaDownload, FaStar } from "react-icons/fa";

const Checkout = () => {
  const courses = useLoaderData();
  const {
    title,
    _id,
    intro,
    total_enroll,
    instructor,
    details,
    image_url,
    price,
    rating,
    category_id,
  } = courses;
  return (
    <div className="w-50 mx-auto">
      <Card>
        {/* <Card.Header className="d-flex justify-content-between align-items-center ">
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
        </Card.Header> */}
        {/* <Card.Img variant="top" src={image_url} /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{intro}</Card.Text>
        </Card.Body>
        {/* <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <h5>{price}</h5>
          </div>
        </Card.Footer> */}
        <Button variant="outline-info" className="p-3 fw-bold">
          Enroll Now
        </Button>
      </Card>
    </div>
  );
};

export default Checkout;
