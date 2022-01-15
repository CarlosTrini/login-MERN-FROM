import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import validationLogin from "../../validations/validationLogin";
import AuthContext from "../../context/AuthContext";

import { Form, Fields, Submit } from "../../styles/formsAuth";

const FormLogin = () => {
  //context
  const { loginFn } = useContext(AuthContext);
  //state
  const [data, setData] = useState({ user: "", password: "" });
  const { user, password } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    validationLogin(data, loginFn);
  };

  return (
      <Form onSubmit={handleSubmit}>
        <h2 className="authTitles">Welcome!</h2>
        <Fields>
          <label htmlFor="user">User Name: </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="userName"
            onChange={handleChange}
            value={user}
          />
        </Fields>
        <Fields>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </Fields>
        <div>
          <Submit className="bg-primary" type="submit">
            Ingresar
          </Submit>
          <Link to="register">No tengo una cuenta</Link>
        </div>
      </Form>
  );
};

export default FormLogin;
