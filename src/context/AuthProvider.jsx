import React, { useState } from "react";
import { useNavigate } from "react-router";

import { basicAlert } from "../alerts/alerts";
import { sendJsonDataFetch } from "../fetch/fetch";
import AuthContext from "./AuthContext";


const baseUrl = `${import.meta.env.VITE_SERVER_URL}` || 'http://localhost:4500/api/fake-site';
const AuthProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));


  const loginFn = async (data) => {
    try {
      const response = await sendJsonDataFetch(
        `${baseUrl}/login`,
        "POST",
        data
      );
      if (response?.error)
        return basicAlert("Error", `${response.msg}`, "error");
      if (response?.msg?.token) {
        createStorage(response.msg.token);
        return navigate("/");
      }
    } catch (error) {
      basicAlert("Upps", `Ha ocurrido un error inesperado`, "info");
    }
  };

  const registerFn = async (data) => {
    try {
      const response = await sendJsonDataFetch(
        `${baseUrl}/register`,
        "POST",
        data
      );
      if (response?.error && response.type === undefined) {
        return basicAlert("Error", `${response.msg}`, "warning");
      }
      //get array errors from server validation...
      else if (response?.type === "validate") {
        const errorsList = response.msg.map((msg) => msg.error);
        const errorsJoin = errorsList.join(", ");
        basicAlert(`Errores`, `${errorsJoin}`, "error");
      }
      setTimeout(() => {
        navigate("/auth");
      }, 2000);
      basicAlert("Exito", `${response.msg}`, "success");
    } catch (error) {
      basicAlert("Upps", `Ha ocurrido un error inesperado`, "info");
    }
  };

  const forgotPassFn = async (email) => {
    try {
      const response = await sendJsonDataFetch(
        `${baseUrl}/forgot-password/`,
        "POST",
        email
      );
      if(!response?.error) return basicAlert('Envío exitoso', `${response.msg}`, 'success');
      else if(response?.error) return basicAlert('Error', `${response.msg}`, 'error');
      else throw new Error(response);
    } catch (error) {
      console.log(error);
      basicAlert("Upps", `Ha ocurrido un error inesperado`, "info");
    }
  };

  const signOutFn = () => {
    clearStorage();
    setToken(false);
    navigate('/auth');
  };

  const createStorage = (token) => {
    setToken(token);
    localStorage.setItem('token', token)
  };
  const clearStorage = () => localStorage.removeItem('token');

  return (
    <AuthContext.Provider
      value={{
        token,
        loginFn,
        registerFn,
        forgotPassFn,
        signOutFn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
