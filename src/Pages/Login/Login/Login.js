import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate("");
  const { providerLogin, signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
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
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGitHubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="shadow p-5 mb-4 bg-body rounded w-100"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 className="fw-bold">
            {" "}
            <Form.Label>Login</Form.Label>
          </h3>
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <br />
        <Button className="mb-3" variant="outline-primary" type="submit">
          Login
        </Button>{" "}
        <br />
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-info"
          className="mb-3"
        >
          Login with Google
        </Button>{" "}
        <br />
        <Button onClick={handleGitHubSignIn} variant="outline-dark">
          Login with GitHub
        </Button>
        <p>
          <small>
            {" "}
            New to this website? Please <Link to="/register">Register</Link>
          </small>
        </p>
      </Form>
    </div>
  );
};

export default Login;
