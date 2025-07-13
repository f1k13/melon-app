import type { IAuth } from "@/shared/types/user.api.type";
import { api } from "../api";

async function authUser(params: IAuth) {
  return await api.post("/auth", params);
}

export const userApi = {
  authUser,
};
