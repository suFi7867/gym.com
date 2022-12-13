import { Route, Routes } from "react-router-dom";
import ElitePage from "../pages/monu/pages/ElitePage";
import Coach from "../pages/nayan/pages/Coach";
import Exercises from "../pages/Shrikrishna/pages/Exercises";

import LandingPage from "../pages/sudarshan/pages/LandingPage";
import Login from "../pages/sufiyan/pages/Login";
import Logout from "../pages/sufiyan/pages/Logout";

const AllRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/coach" element={<Coach />} />
          <Route path="/elite-page" element={<ElitePage />} />
          <Route path="/exercises" element={<Exercises />} />
  
      
        </Routes>
      </div>
    );
  };
  
  export default AllRoutes;
  