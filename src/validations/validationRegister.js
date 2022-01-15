import { basicAlert } from "../alerts/alerts";

const validationRegister = (data, successCb) => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const isComplete = Object.values(data).every((d) => d.trim() !== "");

  if (!isComplete)
    return basicAlert(
      "Incompleto",
      "Todos los campos son obligatorios",
      "error"
    );

  if (data.password.length < 8 || data.passwordCheck.length < 8)
    return basicAlert("Password", "Contraseña mínimo 8 caráteres", "info");

  if (data.password !== data.passwordCheck)
    return basicAlert("Passwords", "Las contraseñas no coinciden", "warning");

  if (!emailRegex.test(data.email))
    return basicAlert("Email", "El correo no es válido", "warning");

  successCb(data);
};
export default validationRegister;
