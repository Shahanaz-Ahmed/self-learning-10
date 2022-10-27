import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="w-75  mx-auto">
      <h2>Some Question Regarding Our Courses</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What do our courses include?</Accordion.Header>
          <Accordion.Body>
            Each of Edutech's course is created, owned and managed by the
            instructor(s). The foundation of each course are its lectures, which
            can include videos, slides, and text. In addition, instructors can
            add resources and various types of practice activities, as a way to
            enhance the learning experience of students.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I take a course?</Accordion.Header>
          <Accordion.Body>
            EduTech courses are entirely on-demand and they can be accessed from
            several different devices and platforms, including a desktop,
            laptop, and our mobile app. After you enroll in a course, you can
            access it by clicking on the course link you will receive in your
            confirmation email.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What if I don’t like a course I purchased?
          </Accordion.Header>
          <Accordion.Body>
            We want you to be satisfied, so all eligible courses purchased on
            EduTech can be refunded within 30 days. If you are unhappy with a
            course, you can request a refund, provided the request meets the
            guidelines in our refund policy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Is EduTech an accredited institution? Do I receive anything after I
            complete a course?
          </Accordion.Header>
          <Accordion.Body>
            While EduTech is not an accredited institution, we offer
            skills-based courses taught by real-world experts in their field.
            Every approved, paid course features a certificate of completion to
            document your accomplishment.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
