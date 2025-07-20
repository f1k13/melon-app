import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className={"w-full h-screen px-5"}>
      <Outlet />
    </div>
  );
}
