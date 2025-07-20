import { useUserContext } from "@/entities/user/user-provider";
import { parseInitData } from "@/shared/lib/utils/parse-init-data";
import Button from "@/shared/ui/button";
import WebApp from "@twa-dev/sdk";

export default function AuthButton() {
  const init = parseInitData();
  const initData = WebApp.initData;
  const { handleAuth } = useUserContext();
  return (
    <Button
      onClick={() => handleAuth({ initData })}
      variant={"fill"}
      rounded={"4xl"}
    >
      Войти как @{init?.username}
    </Button>
  );
}
