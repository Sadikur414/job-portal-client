import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logos/logo-96.png";
import { useContext } from "react";
import AuthContext from "../../../Components/ContextProvider/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myapplication"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                MyApplication
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-brand"></div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </NavLink>
      </div>

      {/*----------------------- Menu horizontal for large screens----------------- */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myapplication"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              MyApplication
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      {/*------------------------- Login and register button-------------------------*/}
      <div className="navbar-end">
        {user ? (
          <NavLink
            to="/logout"
            className="btn btn-primary mr-1"
            onClick={handleLogOut}
          >
            Logout
          </NavLink>
        ) : (
          <div className="navbar-end">
            <NavLink to="/login" className="btn btn-primary mr-1">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-primary ml-1">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
