
import { useState } from "react";
import AllEmployees from "../components/AllEmployeeId";
import FindUsers from "../components/FindUsers"
import ProgressList from "../components/progress/progresslist"
import Layout from "../components/Layout";
import AddEmployeeRecommendation from "../components/AddEmployeeRecomendation";
import AllEmployeesName from "../components/AllEmployeeName";
// import AllProgress from "../components/progress/ShowAllProgress"



const AdminDashboard = () => {
  
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');

  const handleEmployeeSelectId = (employeeId) => {
    setSelectedEmployeeId(employeeId)}

  const handleEmployeeSelectName = (employeeName) => {
    setSelectedEmployeeName(employeeName)}

  return (
 
   <Layout>

     <AllEmployees onSelectEmployeeId={handleEmployeeSelectId}/>

      <ProgressList id={selectedEmployeeId}/>

      <AllEmployeesName onSelectEmployeeName={handleEmployeeSelectName} />
      <AddEmployeeRecommendation employeeName={selectedEmployeeName}/>
      
      <FindUsers/>

   </Layout>
   

  )
}

export default AdminDashboard
