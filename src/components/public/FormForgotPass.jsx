import React, { useState, useContext } from "react";
import { basicAlert } from "../../alerts/alerts";

import AuthContext from "../../context/AuthContext";

import { Form, Fields, Submit } from "../../styles/formsAuth";

const FormForgotPass = () => {
  //context
  const { forgotPassFn } = useContext(AuthContext);
  //state
  const [emailSend, setEmailSend] = useState({ email: "" });
  const { email } = emailSend;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (email.trim() === "" || !emailRegex.test(email))
      return basicAlert("Error", "El correo no es válido", "warning");

    forgotPassFn(emailSend);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="authTitles">Welcome!</h2>
        <Fields>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmailSend({ email: e.target.value })}
          />
        </Fields>
        <div>
          <Submit className="bg-primary" type="submit">
            Enviar mensaje
          </Submit>
        </div>
      </Form>
    </>
  );
};

export default FormForgotPass;
