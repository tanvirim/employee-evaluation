
import { useState } from "react";
import AllEmployees from "../components/AllEmployee";
import FindUsers from "../components/FindUsers"
import Logout from "../components/Logout"
import ProgressList from "../components/progress/progresslist"
// import AllProgress from "../components/progress/ShowAllProgress"



const AdminDashboard = () => {
  
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployeeId(employeeId);}
  return (
    <div>
  
   

     <AllEmployees onSelectEmployee={handleEmployeeSelect}/>

      <ProgressList id={selectedEmployeeId}/>

      <FindUsers/>

      <Logout/>
    </div>
  )
}

export default AdminDashboard
