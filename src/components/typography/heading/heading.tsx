import { PropsWithChildren } from "react";
import styles from "./heading.module.scss";
import cn from "classnames";

interface HeadingProps {
  as: "h1" | "h2";
}

export const Heading = ({ children, as }: PropsWithChildren<HeadingProps>) => {
  const HeadingComponentType = as;
  return (
    <HeadingComponentType
      className={cn(styles.heading, {
        [styles.h1]: as === "h1",
        [styles.h2]: as === "h2",
      })}
    >
      {children}
    </HeadingComponentType>
  );
};
