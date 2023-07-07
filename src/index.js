import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartContext } from "./context/CartContext";
import { CartProvider } from "./context/CartContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
