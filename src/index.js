import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import OrderProvider from "./store/OrderProvider";
import AuthProvider from "./store/AuthProvider";
import AdminOrderProvider from "./store/AdminOrderProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <AdminOrderProvider>
          <CartProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </CartProvider>
        </AdminOrderProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
