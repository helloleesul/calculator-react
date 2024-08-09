import { useContext } from "react";
import { ToastContext } from "../contexts/ToastProvider";

const useToast = () => useContext(ToastContext);

export default useToast;
