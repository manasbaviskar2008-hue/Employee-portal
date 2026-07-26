import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Sidebar() {

  const { logout, isLoggedIn } = useContext(AuthContext);


  return (
    <div>

      <h2>🏢 Employee Portal</h2>

      <hr />

      <Link to="/">
        📊 Dashboard
      </Link>

      <br /><br />

      <Link to="/employees">
        👨‍💼 Employees
      </Link>

      <br /><br />

      <Link to="/leave">
        📝 Leave Checker
      </Link>

      <br /><br />

      <Link to="/payroll">
        💰 Payroll
      </Link>

      <br /><br />


      {!isLoggedIn && (
        <Link to="/login">
          🔐 Login
        </Link>
      )}


      {isLoggedIn && (
        <button onClick={logout}>
          🚪 Logout
        </button>
      )}

    </div>
  );
}

export default Sidebar;