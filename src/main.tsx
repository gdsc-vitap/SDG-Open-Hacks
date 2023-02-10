import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import App from "./App";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#4285f4",
      secondary: "#DB4437",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
