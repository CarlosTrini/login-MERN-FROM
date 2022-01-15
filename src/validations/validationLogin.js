import { basicAlert } from "../alerts/alerts";

const validationLogin = (data, successCb) => {
  const isComplete = Object.values(data).every((d) => d.trim() !== "");

  if (!isComplete)
    return basicAlert("Incompleto", "Ambos campos son obligatorios", "error");

  if (data.password.length < 8)
    return basicAlert("Password", "Contraseña mínimo 8 caráteres", "info");

    successCb(data);
};
export default validationLogin;
