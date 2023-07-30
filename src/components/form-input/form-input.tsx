import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./form-input.module.scss";
import cn from "classnames";
import { TextBody } from "../typography/text-body/text-body";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorMessage?: string;
  icon: ReactNode;
};

export const FormInput = ({
  isError,
  errorMessage,
  icon,
  ...rest
}: FormInputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <input
        className={cn(styles.input, {
          [styles.inputError]: isError,
        })}
        {...rest}
      />
      {errorMessage && (
        <TextBody size="s" className={styles.errorMessage}>
          {errorMessage}
        </TextBody>
      )}
    </div>
  );
};
