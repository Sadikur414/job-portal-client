import { useContext } from "react";
import AuthContext from "../Components/ContextProvider/AuthContext";
import { NavLink, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="mb-4">You must be logged in to view this page.</p>

        <NavLink
          to="/login"
          state={location?.pathname}
          className="btn btn-primary"
        >
          Go to Login
        </NavLink>
      </div>
    </div>
  );
};

export default PrivetRoute;
