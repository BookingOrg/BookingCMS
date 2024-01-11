import { toast, Slide } from "react-toastify";
type NotiProps = {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
};
const PopupNotification = ({ type, message, position }: NotiProps) => {
  toast(message, {
    type: type,
    position: position ?? "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};
export default PopupNotification;
