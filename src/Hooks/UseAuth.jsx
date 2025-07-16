import { useContext } from "react";
import AuthContext from "../Components/ContextProvider/AuthContext";

const UseAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export default UseAuth;
