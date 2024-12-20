import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Profile</h2>
          {error && <Alert variant="danger">{error} </Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Your Profile
          </Link>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}
