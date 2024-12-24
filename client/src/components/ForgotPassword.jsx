import React, { useRef } from "react";
import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")
  //const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("")
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage("Check your Inbox for futher Instructions")
    } catch {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-2">Password Reset</h2>
            {error && <Alert variant="danger">{error} </Alert>}
            {message && <Alert variant="success">{message} </Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-2">
           <Link to={"/login"}>Login</Link>
        </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
