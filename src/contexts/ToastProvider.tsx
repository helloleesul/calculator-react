import { createContext, useState } from "react";
import Toast from "../components/Toast";
import { createPortal } from "react-dom";

type ToastProviderType = {
  toasts: string[];
  addToast: (value: string) => void;
};

export const ToastContext = createContext<ToastProviderType>({
  toasts: [],
  addToast: () => {},
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
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
