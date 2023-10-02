
import { useState } from "react";
import AllEmployees from "../components/AllEmployee";
import FindUsers from "../components/FindUsers"
import ProgressList from "../components/progress/progresslist"
import Layout from "../components/Layout";
// import AllProgress from "../components/progress/ShowAllProgress"



const AdminDashboard = () => {
  
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployeeId(employeeId);}
  return (
 
   <Layout>

     <AllEmployees onSelectEmployee={handleEmployeeSelect}/>

      <ProgressList id={selectedEmployeeId}/>

      <FindUsers/>

   </Layout>
   

  )
}

export default AdminDashboard
