import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider, useAdmin } from './data/AdminContext';

// Portfolio components
import Portfolio from './Portfolio';

// Admin components
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
};

function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          {/* Public Portfolio */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Admin Login */}
          <Route path="/admin" element={<AdminLogin />} />
          
          {/* Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
