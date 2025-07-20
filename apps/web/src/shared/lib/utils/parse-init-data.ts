import WebApp from "@twa-dev/sdk";

const initData = WebApp.initData;

export function parseInitData() {
  if (!initData) return null;

  const params = new URLSearchParams(initData);
  const userJsonEncoded = params.get("user");
  if (!userJsonEncoded) return null;

  try {
    const user = JSON.parse(decodeURIComponent(userJsonEncoded));
    return user || null;
  } catch (e) {
    console.error("Ошибка парсинга user JSON:", e);
    return null;
  }
}
