/* eslint-disable react/prop-types */
import {Navigate, BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/employee-dashboard" element={<ProtectedRoute> <EmployeeDashboard/> </ProtectedRoute>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

const ProtectedRoute = (props)=> {
  if(localStorage.getItem("data")){
    return props.children
  }else {
    return <Navigate to="/login"/>
  }
   
}
  

export default App
