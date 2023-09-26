import CreateProgressComponent from "../components/CreateProgress"
import Logout from "../components/Logout"
import ShowProgress from "../components/ShowProgress"


const EmployeeDashboard = () => {
  return (
    <>
    <CreateProgressComponent/>
    <ShowProgress/>
    <Logout> <a >LogOut</a></Logout>
    </>
  )
}

export default EmployeeDashboard
