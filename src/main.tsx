import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/global.css";

import { router } from "@/router";
import { BoringProvider } from "@/lib/boring";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BoringProvider>
      <RouterProvider router={router} />
    </BoringProvider>
  </React.StrictMode>,
);
