import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is cors?</Accordion.Header>
        <Accordion.Body>
          CORS is shorthand for Cross-Origin Resource Sharing.It is a mechanism
          to allow or restrict requested resources on a web server depend on
          where the HTTP request was initiated. CORS is a node.js package for
          providing a Connect/Express middleware that can be used to enable CORS
          with various options.Cross-origin resource sharing (CORS) allows AJAX
          requests to skip the Same-origin policy and access resources from
          remote hosts.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Firebase Authentication integrates tightly with other Firebase
          services, and it leverages industry standards like OAuth 2.0 and
          OpenID Connect, so it can be easily integrated with your custom
          backend. <br /> Auth0, MongoDB, Passport, Okta, and Firebase are the
          most popular alternatives and competitors to Firebase Authentication.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login.The private route component is similar to
          the public route, the only change is that redirect URL and
          authenticate condition. If the user is not authenticated he will be
          redirected to the login page and the user can only access the
          authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. <br />
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. To operate I/O operations or requests node.js use the concept
          of threads. Thread is a sequence of instructions that the server needs
          to perform. It runs parallel on the server to provide the information
          to multiple clients. Node.js is an event loop single-threaded
          language. It can handle concurrent requests with a single thread
          without blocking it for one request.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
