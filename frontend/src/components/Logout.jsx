
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutIcon = styled.span`
  margin-right: 8px;
`;

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("data");
    window.location.reload();
  };

  return (
    <LogoutButton onClick={handleLogout}>
      <LogoutIcon>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutIcon>
      Logout
    </LogoutButton>
  );
}

export default Logout;
