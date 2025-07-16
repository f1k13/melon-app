import AuthButton from "@/features/auth/ui/auth-button";
import Badge from "@/shared/ui/badge";
import Logo from "@/shared/ui/icons/common/logo";
export default function Auth() {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className="flex justify-end w-full">
        <Logo />
      </div>
      <span className="-mt-14 text-8xl font-bold text-main">melon</span>
      <Badge>Новый и удобный сервис для создания и просмотра роликов </Badge>
      <span className={"text-white font-tienne text-center "}>
        Смотри шортсы без VPN и регистрации, не выходя из Telegram!
      </span>
      <AuthButton />
    </div>
  );
}
