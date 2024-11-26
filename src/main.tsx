import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App.tsx";
import "./index.css";
import { queryClients } from "./lib/react-query.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClients}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
