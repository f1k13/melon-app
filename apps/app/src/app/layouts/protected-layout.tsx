import UserProvider from "@/entities/user/user-provider";

import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <div className={"bg-[#313131] h-screen w-screen px-1"}>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  );
}
