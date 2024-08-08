import { createContext, useState } from "react";
import Toast from "../components/Toast";
import { createPortal } from "react-dom";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    setToasts((prev) => [...prev, message]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
      {createPortal(<Toast />, document.body)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
