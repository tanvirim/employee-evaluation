/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Register';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EvaluatorDashboard from './pages/EvaluatorDashboard';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import RecommendedEmployeesTable from './pages/FindEmployeeWithRecomendation';
function App() {
  return (
    <Router>
      <ToastContainer position='bottom-right' />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route
          path='allrecommendation'
          element={<RecommendedEmployeesTable />}
        />

        <Route path='profile' exact element={<Profile />} />
        <Route
          path='employee-dashboard'
          exact
          element={
            <PrivateRouteForRole role='employee'>
              <EmployeeDashboard />
            </PrivateRouteForRole>
          }
        />
        <Route
          path='admin-dashboard'
          element={
            <PrivateRouteForRole role='admin'>
              <AdminDashboard />
            </PrivateRouteForRole>
          }
        />
        <Route
          path='evaluator-dashboard'
          element={
            <PrivateRouteForRole role='evaluator'>
              <EvaluatorDashboard />
            </PrivateRouteForRole>
          }
        />
      </Routes>
    </Router>
  );
}

const PrivateRouteForRole = ({ children, role }) => {
  const userRole = JSON.parse(localStorage.getItem('data'))?.role;

  if (userRole === role) {
    return children;
  } else {
    // Redirect to login if the user doesn't have the required role
    return <Navigate to='/login' />;
  }
};

export default App;
