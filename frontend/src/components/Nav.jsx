import { Link } from "react-router-dom";
import Logout from "./Logout";
import { BsPersonWorkspace } from "react-icons/bs";
const Navbar = () => {
  const { name, } = JSON.parse(localStorage.getItem("data"));

  return (
    <nav>
      <div className="flex justify-between bg-gray-200 p-2">
        <Link className="navbar-logo">
          <BsPersonWorkspace size={30} color="green" />
        </Link>
        <ul className="flex justify-between gap-3">
          <Link to="/profile"  className="text-white px-2 pt-1 rounded-lg  cursor-pointer bg-blue-500 hover:text-blue-500 hover:bg-white hover:ring-black ">
           View Profile
          </Link>
          <li>{name}</li>
          <li className="navbar-item">
            <Logout />
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
