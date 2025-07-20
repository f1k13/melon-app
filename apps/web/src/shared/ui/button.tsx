import React, { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "outline";
  rounded?: "2xl" | "3xl" | "4xl";
  children: React.ReactNode;
}

export default function Button({
  variant = "fill",
  rounded = "2xl",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-2 font-tienne text-lg transition-colors duration-200 border-2 cursor-pointer";
  const fill =
    "bg-main text-secondary border-main hover:bg-opacity-90 active:bg-opacity-80";
  const outline =
    "bg-transparent text-white border-main hover:bg-main hover:text-secondary";

  const variantClass = variant === "fill" ? fill : outline;
  const roundedClass = `rounded-${rounded}`;

  return (
    <button
      className={clsx(roundedClass, base, variantClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}
