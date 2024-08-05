import { ReactNode } from "react";
import styles from "./styles/FormWrapper.module.css"; // Import the CSS module

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FormWrapper;
