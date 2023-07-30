import { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./text-body.module.scss";

interface TextBodyProps {
  size: "s" | "m";
}

export const TextBody = ({
  children,
  size,
}: PropsWithChildren<TextBodyProps>) => {
  return (
    <p
      className={cn(styles.textBody, {
        [styles.textBodyS]: size === "s",
        [styles.textBodyM]: size === "m",
      })}
    >
      {children}
    </p>
  );
};
