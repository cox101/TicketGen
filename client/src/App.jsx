import { Outlet, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import { CreateTicket } from "./components/tickets/CreateTicket";
import TeamsPage from "./pages/TeamPage";
import LocationsPage from "./pages/LocationPage";
import SettingsPage from "./pages/SettingsPage";
import TicketsPage from "./pages/TicketsPage";
import { Sidebar } from "./components/layout/SideBar";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <AuthProvider>
      <nav>
        <Sidebar />
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-ticket" element={<CreateTicket />} />

        {/* Private Routes */}
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

        {/* Main App Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
