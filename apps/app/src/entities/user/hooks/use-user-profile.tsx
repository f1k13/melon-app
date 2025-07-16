import type { TUserProfile } from "../model/types";

type TUserProfileArgs = {
  defaultValues: TUserProfile & {
    interests: string[];
  };
};

export function useUserProfile(args: TUserProfileArgs) {}
