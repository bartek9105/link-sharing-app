import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./button.module.scss";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...rest}
      className={cn(styles.button, {
        [styles.buttonPrimary]: variant === "primary",
        [styles.buttonSecondary]: variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};
