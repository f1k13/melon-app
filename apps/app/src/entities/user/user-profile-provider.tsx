/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import type { TUserProfile } from "./model/types";
import { useUserProfile } from "./hooks/use-user-profile";

type TUserProfileProviderProps = {
  props: {
    defaultValues: TUserProfile & {
      interests: string[];
    };
  };
  children: ReactNode;
};

type TContext = ReturnType<typeof useUserProfile>;

const UserProfileContext = createContext<TContext>({} as unknown as TContext);

export const useUserProfileContext = () => {
  const context = useContext(UserProfileContext);
  return context;
};

export default function UserProfileProvider({
  props,
  children,
}: TUserProfileProviderProps) {
  const data = useUserProfile(props);
  return (
    <UserProfileContext.Provider value={data}>
      {children}
    </UserProfileContext.Provider>
  );
}
