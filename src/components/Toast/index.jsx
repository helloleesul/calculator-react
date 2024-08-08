import useToast from "../../hooks/useToast";
import styles from "./Toast.module.scss";

const Toast = () => {
  const { toasts } = useToast();

  return (
    <div className={styles.container}>
      {toasts?.map((toast, index) => (
        <p key={index}>{toast}</p>
      ))}
    </div>
  );
};

export default Toast;
