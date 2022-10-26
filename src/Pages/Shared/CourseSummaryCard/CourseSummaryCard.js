import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ courses }) => {
  const {
    title,
    _id,
    total_view,
    instructor,
    details,
    image_url,
    price,
    rating,
  } = courses;
  return (
    <Card className="mb-5 p-0">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-2"
            roundedCircle
            src={instructor?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className="mb-0">{instructor?.name}</p>
            <p>{instructor?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image
          className=""
          src={image_url}
          style={{ height: "250px", width: "100%" }}
        ></Image>
        {/* <Card.Img variant="top" src={image_url} /> */}
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/courses/${_id}`}>Read more</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseSummaryCard;
