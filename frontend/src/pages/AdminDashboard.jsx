
import FindUsers from "../components/FindUsers"
import Logout from "../components/Logout"
import AllProgress from "../components/ShowAllProgress"



const AdminDashboard = () => {
  return (
    <div>

   
      <AllProgress/>

      <FindUsers/>

      <Logout/>
    </div>
  )
}

export default AdminDashboard
