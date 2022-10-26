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
    instructor,
    details,
    image_url,
    price,
    rating,
    category_id,
  } = courses;
  return (
    <Card className="mb-5 p-0">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Button>Get Premium Access</Button>
        <Pdf targetRef={ref} filename={`course${category_id}.pdf`}>
          {({ toPdf }) => (
            <Button className="bg-light text-dark" onClick={toPdf}>
              <FaDownload></FaDownload>
            </Button>
          )}
        </Pdf>
      </Card.Header>
      <Card.Body ref={ref}>
        <Card.Title>{title}</Card.Title>
        <Image
          className=""
          src={image_url}
          style={{ height: "250px", width: "100%" }}
        ></Image>
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
          <h5>{price}</h5>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseSummaryCard;
