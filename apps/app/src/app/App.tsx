import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";

export default function App() {
  const userData = WebApp.initData;
  useEffect(() => {
    fetch("http://localhost:3000/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ initData: userData }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }, []);
  return <>{userData}</>;
}
