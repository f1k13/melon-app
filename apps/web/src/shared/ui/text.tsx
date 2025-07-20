import type { ReactNode } from "react";

type TTextProps = {
  children: ReactNode;
  font?: "rubik" | "tienne";
  color?: string;
  size?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
};

export default function Text({
  children,
  font = "rubik",
  color,
  size,
}: TTextProps) {
  return (
    <span className={`font-${font} text-${color} text-${size}`}>
      {children}
    </span>
  );
}
