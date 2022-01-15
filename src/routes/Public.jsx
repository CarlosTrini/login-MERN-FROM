import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import LayoutAuht from "../components/LayoutAuht";
import AuthContext from "../context/AuthContext";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

const Public = () => {
  const {token} = useContext( AuthContext);

  if (token) return <Navigate to='/' reaplace /> 
  
  return (
    <Routes>
      <Route path="/" element={<LayoutAuht />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Public;
