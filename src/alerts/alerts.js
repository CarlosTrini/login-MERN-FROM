import Swal from "sweetalert2";

export const basicAlert = (title, text, icon = 'success') => {
  return Swal.fire(title, text, icon);
};
