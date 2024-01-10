import { notification } from "antd";

type typeMessage = "success" | "error" | "warning" | "info";
const PopupNotification = (
  type: typeMessage,
  message?: string,
  description?: string
) => {
  notification[type]({
    message: message,
    description: description,
  });
};
export default PopupNotification;
