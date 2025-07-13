import { parseInitData } from "@/shared/lib/utils/parse-init-data";
import Badge from "@/shared/ui/badge";
import Logo from "@/shared/ui/icons/common/logo";
export default function Auth() {
  const initData = parseInitData();

  return (
    <>
      <div className={"flex justify-end w-full"}>
        <Logo />
      </div>
      <span className={"text-8xl mt-0 font-bold text-main"}>melon</span>
      <Badge>Новый и удобный сервис для создания и просмотра роликов </Badge>
      {initData.username}
    </>
  );
}
