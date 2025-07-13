import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className={"bg-secondary border border-main rounded-4xl "}>
      <span className={"text-white font-tienne text-[16px]"}>{children}</span>
    </div>
  );
}
