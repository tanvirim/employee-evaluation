const Logout = () => {
    const handleLogout = () => {
      localStorage.removeItem("data");
      window.location.reload();
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }
  
  export default Logout;
  