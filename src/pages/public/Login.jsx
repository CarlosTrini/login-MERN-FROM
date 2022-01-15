import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "@emotion/styled";

import FormForgotPass from "../../components/public/FormForgotPass";
import FormLogin from "../../components/public/FormLogin";

const Button = styled.button`
  display: block;
  margin: -2rem auto 0;
  padding: 0 0 .5rem;
  background: transparent;
  border: none;
  border-radius: 0.3rem;
  text-decoration: 0.1rem underline #221fc5;
  color:  #221fc5;
  cursor: pointer;
`;

const Login = () => {
  //  react-router
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/api/fake-site/";

  //state
  const [forgot, setForgot] = useState(false);

  const handleSesion = async () => {
    await loginFn();
    navigate(from, { replace: true });
  };

  return (
    <>
      {!forgot ? <FormLogin /> : <FormForgotPass />}
      <Button onClick={() => setForgot(!forgot)}>Olvidé mi contraseña</Button>
    </>
  );
};

export default Login;
