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
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Button className="bg-light text-dark">
            <Link className="text-decoration-none" to={`/checkout/${_id}`}>
              Get Premium Access
            </Link>
          </Button>
          <Pdf targetRef={ref} filename={`course${category_id}.pdf`}>
            {({ toPdf }) => (
              <Button className="bg-light text-dark" onClick={toPdf}>
                <FaDownload></FaDownload>
              </Button>
            )}
          </Pdf>
        </Card.Header>
        <Card.Body ref={ref} className="mt-3">
          <Card.Title>{title}</Card.Title>
          <Image
            className=""
            src={image_url}
            style={{ height: "250px", width: "100%" }}
          ></Image>
          <Card.Text>{intro}</Card.Text>
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
    </div>
  );
};

export default CourseSummaryCard;
