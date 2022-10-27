import React from "react";
import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseSummaryCard = ({ courses }) => {
  const ref = React.createRef();
  const {
    title,
    _id,
    intro,
    instructor,
    details,
    image_url,
    price,
    rating,
    category_id,
  } = courses;
  return (
    <div>
      <Card className="mb-5 p-0 shadow border border-0 h-100">
        <Card.Body className="mt-3 pb-0">
          <Card.Title>{title}</Card.Title>
          <Image
            className=""
            src={image_url}
            style={{ height: "250px", width: "100%" }}
          ></Image>
          <Card.Text className="mt-3">{intro}</Card.Text>
          <Card.Text>
            {details.length > 100 ? (
              <p>{details.slice(0, 100) + "..."}</p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between mt-0 m-3">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <h5>{price}</h5>
          </div>
        </div>

        <Link
          className="text-decoration-none text-dark fw-bold"
          to={`/courses/${_id}`}
        >
          <Button variant="outline-info" className="p-3 w-100 fw-semibold">
            {" "}
            Get Course
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;
