import { useUserApi } from "@/shared/api/user/useUserApi";
import { ACCESS_TOKEN_KEY } from "@/shared/consts/local-stotage";
import { getValue, setValue } from "@/shared/native/local-storage";
import type { IAuth } from "@/shared/types/user.api.type";
import { useUserStore } from "../model/store";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_PAGE, MAIN_PAGE, ONBOARDING_PAGE } from "@/shared/consts/links";

export function useUser() {
  const navigate = useNavigate();
  const { mutateAsync } = useUserApi.useAuthUserApi();
  const token = getValue(ACCESS_TOKEN_KEY);
  const { data, isLoading } = useUserApi.useGetMeUserApi();
  const store = useUserStore((state) => state);
  const didRedirect = useRef(false);

  async function handleAuth(params: IAuth) {
    const { data } = await mutateAsync({ initData: params.initData });

    if (data.user) {
      setValue(ACCESS_TOKEN_KEY, data.token);
      store.setUser({
        user: data.user,
        profile: data.profile,
      });
      const createdAt = new Date(data.user.createdAt).getTime();
      const authDate = new Date(data.user?.authDate as string).getTime();
      const isJustCreated = Math.abs(createdAt - authDate) < 5000;

      didRedirect.current = true;

      if (isJustCreated) {
        navigate(ONBOARDING_PAGE);
      } else {
        navigate(MAIN_PAGE);
      }
    }
  }
  useEffect(() => {
    if (didRedirect.current) return;

    if (!token) {
      navigate(AUTH_PAGE);
      return;
    }

    if (data?.data) {
      store.setUser(data.data);
      navigate(ONBOARDING_PAGE);
      didRedirect.current = true;
    }
  }, [token, data]);

  return {
    handleAuth,
    store,
    isLoading,
  };
}
