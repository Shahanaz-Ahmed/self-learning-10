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
    <div className="w-75 mx-auto">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{intro}</Card.Text>
        </Card.Body>
        <Button variant="outline-info" className="p-3 fw-bold">
          Enroll Now
        </Button>
      </Card>
    </div>
  );
};

export default Checkout;
