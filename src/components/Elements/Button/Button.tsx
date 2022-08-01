import clsx from "clsx";
import { shadows, variants } from "../styles";
import { BoxProps } from "../types";

export type ButtonProps = BoxProps & {
  size: "sm" | "md" | "lg";
};
const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-normal",
  lg: "px-6 py-3 text-xl",
};

export const Button: React.FC<Partial<ButtonProps>> = ({
  children,
  className,
  shadow = "sm",
  size = "md",
  variant = "normal",
}) => {
  return (
    <button
      className={clsx(
        "border-base-content rounded-full border-2 font-bold active:shadow-none",
        buttonSizes[size],
        variants[variant],
        shadows[shadow],
        className
      )}
    >
      {children}
    </button>
  );
};