import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import TicketsPage from "./pages/TicketsPage";
import { CreateTicket } from './components/tickets/CreateTicket';
import { TeamsPage } from "./pages/TeamPage";
import { LocationsPage } from "./pages/LocationPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="create-ticket" element={<CreateTicket />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
        />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/settings" element={<div>Settings Page</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
