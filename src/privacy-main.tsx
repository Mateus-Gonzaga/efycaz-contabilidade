import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/lato/latin-400.css";
import "@fontsource/lato/latin-700.css";
import "./index.css";
import { PrivacyPage } from "./pages/privacy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
);
