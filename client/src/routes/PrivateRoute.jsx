//import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {


  const { isAuth } = useSelector((store) => store.auth);
  
  if (!isAuth) {
    return alert("You Need To Login First"), (<Navigate to="/login" />);
  }

  return children;
}

export default PrivateRoute;
