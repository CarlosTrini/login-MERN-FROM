import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import { HeaderStyle, Button } from "../../styles/home.js";

const Header = () => {
  const { signOutFn } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFn();
    return <Navigate to="/auth" replace />;
  };

  return (
    <HeaderStyle>
      <Link to="/">
        <h1>Login-Mern</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
            </li>
          <li>
            <Link to="clients">clients</Link>
            </li>
          <li>
            <Link to="contact">contact</Link>
            </li>
        </ul>
      </nav>
      <Button onClick={handleSignOut}>salir</Button>
    </HeaderStyle>
  );
};

export default Header;
