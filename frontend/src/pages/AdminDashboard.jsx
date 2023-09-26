import AddEmployeeRecommendation from "../components/AddEmployeeRecom"
import Logout from "../components/Logout"
import AllProgress from "../components/ShowAllProgress"



const AdminDashboard = () => {
  return (
    <div>

      <AddEmployeeRecommendation/>
      <AllProgress/>

      <Logout/>
    </div>
  )
}

export default AdminDashboard
