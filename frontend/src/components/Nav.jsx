
import { Link } from 'react-router-dom';
import Logout from './Logout';
import {BsPersonWorkspace} from 'react-icons/bs'
const Navbar = () => {
    const {name ,role}= JSON.parse(localStorage.getItem('data'))

  return (
    <nav>
      <div className="flex justify-between bg-gray-200 p-2">
        <Link  className="navbar-logo">
            <BsPersonWorkspace size={30} color='green' />
            
        
</Link>
        <ul className="flex justify-between gap-3">
          <li >
            {name}
          </li>
          <li >
            {role}
          </li>
          <li className="navbar-item">
            <Logout/>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
