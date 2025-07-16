import type { IAuth } from "@/shared/types/user.api.type";
import { api } from "../api";
import type { TUserAuthResponse } from "@/entities/user/model/types";

async function authUser(params: IAuth): Promise<{
  data: TUserAuthResponse;
}> {
  return await api.post("/user/auth", params);
}

async function getMe() {
  return await api.get("/user/index");
}

async function getAllInterests() {
  return await api.get("/user/get-all-interests");
}

export const userApi = {
  authUser,
  getMe,
  getAllInterests,
};
