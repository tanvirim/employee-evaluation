/* eslint-disable react/prop-types */
import {Navigate, BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EvaluatorDashboard from './pages/EvaluatorDashboard';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/employee-dashboard" element={<ProtectedRouteForEmployee > <EmployeeDashboard/> </ProtectedRouteForEmployee>}/>
        <Route exact path="/admin-dashboard" element={<ProtectedRouteForAdmin> <AdminDashboard/> </ProtectedRouteForAdmin>}/>
        <Route exact path="/evaluator-dashboard" element={<ProtectedRouteForEvaluator> <EvaluatorDashboard/> </ProtectedRouteForEvaluator>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

const ProtectedRouteForEmployee = (props)=> {
  if(JSON.parse(localStorage.getItem('data'))?.role === 'employee'){
    return props.children
  }else {
    return <Navigate to="/login"/>
  }
   
}
const ProtectedRouteForAdmin = (props)=> {
  if(JSON.parse(localStorage.getItem('data'))?.role === 'admin'){
    return props.children
  }else {
    return <Navigate to="/login"/>
  }
   
}
const ProtectedRouteForEvaluator = (props)=> {
  if(JSON.parse(localStorage.getItem('data'))?.role === 'evaluator'){
    return props.children
  }else {
    return <Navigate to="/login"/>
  }
   
}
  

export default App
