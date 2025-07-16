import { create } from "zustand";
import type { IUserProfile } from "./types";

type TStore = {
  user: IUserProfile;
  setUser: (user: IUserProfile) => void;
};

export const useUserStore = create<TStore>((set) => ({
  user: {} as IUserProfile,
  setUser: (user) => set({ user }),
}));
