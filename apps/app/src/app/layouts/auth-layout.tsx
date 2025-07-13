import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className={
        "flex flex-col items-center justify-center max-w-[300px] mx-auto "
      }
      style={{
        margin: "auto",
      }}
    >
      <Outlet />
    </div>
  );
}
