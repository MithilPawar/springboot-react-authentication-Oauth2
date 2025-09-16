import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import PrivateRoutes from "./Components/PrivateRoutes";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* private route */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
