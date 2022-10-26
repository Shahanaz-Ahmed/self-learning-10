import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch();
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-5"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201614.png"
          alt=""
          style={{ height: "45px" }}
          className="me-2"
        />
        <Navbar.Brand>
          <Link to="/">EduTech</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/allCourse">Courses</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link>
              <Link to="/blog">Blog</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" title={user?.displayName}>
              {user?.uid ? (
                <>
                  {user?.photoURL ? (
                    <Image
                      className="me-3"
                      roundedCircle
                      style={{ height: "30px" }}
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    <FaUser className="me-3"></FaUser>
                  )}
                  <Button onClick={handleLogOut}>Log Out</Button>
                </>
              ) : (
                <>
                  <Link className="me-3" to="/login">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav.Link>
            {/* <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
