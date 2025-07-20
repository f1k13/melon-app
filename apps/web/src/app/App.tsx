import { RouterProvider } from "react-router-dom";
import AppProvider from "./providers/app-provider";
import "./styles/App.css";
import { Suspense, useLayoutEffect } from "react";
import { routes } from "../shared/lib/router/router-data";
import WebApp from "@twa-dev/sdk";
export default function App() {
  useLayoutEffect(() => {
    WebApp.disableVerticalSwipes();
    WebApp.enableClosingConfirmation();
    WebApp.expand();
    WebApp.ready();
  }, []);
  return (
    <AppProvider>
      <Suspense>
        <RouterProvider router={routes} />
      </Suspense>
    </AppProvider>
  );
}
