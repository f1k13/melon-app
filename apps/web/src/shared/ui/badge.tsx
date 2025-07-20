import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "px-4 text-center py-2 border bg-secondary border-main rounded-4xl"
      }
    >
      <span className={"text-white font-tienne font-normal text-center"}>
        {children}
      </span>
    </div>
  );
}
