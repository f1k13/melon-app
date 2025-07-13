import { AUTH_PAGE, MAIN_PAGE } from "@/shared/consts/links";
import { ACCESS_TOKEN_KEY } from "@/shared/consts/local-stotage";
import { getValue } from "@/shared/native/local-storage";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const token = getValue(ACCESS_TOKEN_KEY);
  useEffect(() => {
    if (token) {
      navigate(MAIN_PAGE);
    } else {
      navigate(AUTH_PAGE);
    }
  }, [token]);
  return (
    <div className={"bg-[#313131] h-screen w-screen px-1"}>
      <Outlet />
    </div>
  );
}
