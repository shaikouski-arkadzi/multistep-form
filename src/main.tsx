import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./context/FormProvider";
import { App } from "./components/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FormProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </FormProvider>
  </BrowserRouter>
);
