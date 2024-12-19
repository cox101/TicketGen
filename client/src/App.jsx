import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/update-profile" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
