import React, { useRef } from "react";
import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = []
    setLoading(true)
    setError("")
    if(emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if(passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      navigate("/")
    }).catch(() => {
      setError("Failed to update account")
    }).finally(() =>{
      setLoading(false)
    })
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
            <h2 className="text-center mb-2">Update Your Profile</h2>
            {error && <Alert variant="danger">{error} </Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
              </Form.Group>
              <Form.Group id="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
              </Form.Group>
              <Form.Group id="confirm password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={confirmPasswordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Update
              </Button>
              <Button disabled={loading} className="w-100 mt-4 bg-white border-white" type="submit">
       <Link to={"/"} className="text-blue text-xl"> Cancel </Link>
              </Button>
            </Form>
          </Card.Body>
        </Card>
       
      </div>
    </div>
  );
}