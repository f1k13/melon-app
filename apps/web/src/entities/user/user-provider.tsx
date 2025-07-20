/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import { useUser } from "./hooks/use-user";

type TContext = ReturnType<typeof useUser>;

const UserContext = createContext<TContext>({} as unknown as TContext);

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default function UserProvider({ children }: { children: ReactNode }) {
  const data = useUser();
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
