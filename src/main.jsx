import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Logic from "./store/Logic.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logic>
      <App />
    </Logic>
  </StrictMode>
);
