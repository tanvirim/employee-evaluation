
import Logout from "../components/Logout"
import ProgressList from "../components/progress/progresslist"

const EmployeeDashboard = () => {
  const { id } = JSON.parse(localStorage.getItem("data"));
  return (
    <>
    <ProgressList id={id}/>
    <Logout> <a >LogOut</a></Logout>
    </>
  )
}

export default EmployeeDashboard
