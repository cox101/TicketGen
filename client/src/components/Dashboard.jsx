import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/update-profile")
  }
  async function handleLogOut() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError("Failed to logout");
    }
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
          <h2 className="text-center mb-2">Profile</h2>
          {error && <Alert variant="danger">{error} </Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Button className="w-100 text-center mt-4" onClick={handleClick}>
            Update Your Profile
          </Button>
          
          <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
        </Card.Body>
      </Card>
   </div>
   </div>
  );
}
