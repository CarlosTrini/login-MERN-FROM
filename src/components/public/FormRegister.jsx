import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import validationRegister from "../../validations/validationRegister";

import { Form, Fields, Submit } from "../../styles/formsAuth";

const FormRegister = () => {
  //context
  const {registerFn} = useContext(AuthContext);
  //state
  const [data, setData] = useState({
    user: "",
    name: "",
    birthdate: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { user, name, birthdate, email, password, passwordCheck } = data;

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    validationRegister(data, registerFn);
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="authTitles">Register here!</h2>
        <Fields>
          <label htmlFor="user">User Name: </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="userName"
            value={user}
            onChange={handleChange}
          />
        </Fields>

        <Fields>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </Fields>

        <Fields>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={handleChange}
          />
        </Fields>

        <Fields>
          <label htmlFor="birthdate">Date: </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleChange}
          />
        </Fields>

        <Fields>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </Fields>

        <Fields>
          <label htmlFor="passwordCheck">Repeat your Password: </label>
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="passwordCheck"
            value={passwordCheck}
            onChange={handleChange}
          />
        </Fields>
        <div>
          <Submit className="bg-secondary" type="submit">
            Registrarme
          </Submit>
          <Link to="/auth">Ya tengo una cuenta</Link>
        </div>
      </Form>
    </>
  );
};

export default FormRegister;
