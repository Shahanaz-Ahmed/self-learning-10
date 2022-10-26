import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { providerLogin, signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text>
      <br />
      <Button variant="primary" type="submit">
        Login
      </Button>{" "}
      <br />
      <Button onClick={handleGoogleSignIn} variant="outline-info">
        Login with Google
      </Button>{" "}
      <br />
      <Button variant="outline-dark">Login with GitHub</Button>
    </Form>
  );
};

export default Login;
