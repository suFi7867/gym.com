//import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminPrivateAuth({ children }) {
 // const { AdminIsAuth } = useSelector((store) => store.auth);

 const AdminIsAuth = true

  if (!AdminIsAuth) {
    return (
      alert("You are redirected for security reason"), (<Navigate to="/" />)
    );
  }

  return children;
}

export default AdminPrivateAuth;
