import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Home from "../pages/Home";
import AddCRM from "../pages/AddCRM";
import EditUser from "../pages/EditUser";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addcrm" element={<AddCRM />} />
        <Route path="/edituser" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
