import { useUserContext } from "@/entities/user/user-provider";

export default function MainPage() {
  const { store } = useUserContext();
  return <div>фывыфв {store.user.user?.tgUsername}</div>;
}
