import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className={
        "flex flex-col justify-center items-center mx-auto max-w-[300px]"
      }
    >
      <Outlet />
    </div>
  );
}
