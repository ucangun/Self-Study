import Swal from "sweetalert2";

export const enum SweetAlertIcons {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
}

export const notify = (msg: string, icon: SweetAlertIcons) =>
  Swal.fire({
    title: "Todo App!",
    text: msg,
    icon: icon,
    confirmButtonText: "OK",
    timer: 3000,
    timerProgressBar: true,
  });
