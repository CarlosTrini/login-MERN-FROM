import { basicAlert } from "../alerts/alerts";

export const sendJsonDataFetch = async (url, typeMethod, data, token = null) => {
  try {
    const peticion = await fetch(url, {
      method: typeMethod,
      headers: {
        "Content-Type": "application/json",
        "Authorization" : token
      },
      body: JSON.stringify(data),
    });
    const res = await peticion.json();
    return res;
  } catch (error) {
    console.error('ERROR ==> ', error);
    if (error instanceof TypeError) {
         basicAlert('Algo ha fallado', `${error.message}`, 'error');
    }
    else if (error instanceof ReferenceError || error instanceof SyntaxError){ 
        basicAlert("Error", "Ha ocurrido un error en la aplicación. Intente más tarde", "error");
    }
    else{
        basicAlert("Error", "Ha ocurrido un error. Intente más tarde", "error");
    }
  }
};
