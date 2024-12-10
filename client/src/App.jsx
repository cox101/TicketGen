import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
