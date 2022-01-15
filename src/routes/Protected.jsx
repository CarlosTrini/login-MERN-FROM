import React, { useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router";

import AuthContext from "../context/AuthContext";
import Layout from "../components/Layout";
import Home from "../pages/private/Home";
import About from "../pages/private/About";
import Clients from "../pages/private/Clients";
import Contact from "../pages/private/Contact";

const Protected = () => {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  if (!token) {
    console.log(token);
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='clients' element={<Clients />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Protected;
