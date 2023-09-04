import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ResetPassword from "./pages/ResetPassword";
import Product from "./pages/Product";
import Pengiriman from "./pages/Pengiriman";
import Pembayaran from "./pages/Pembayaran";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Kategori from "./pages/Kategori";
import Dashboard from "./pages/adminPage/Dashboard";
import Products from "./pages/adminPage/Products";
import Orders from "./pages/adminPage/Orders";
import Users from "./pages/adminPage/Users";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import AddProduct from "./pages/adminPage/AddProduct";
import EditProduct from "./pages/adminPage/EditProduct";
import OrderDetail from "./components/akun/user/OrderDetail";
import OrderDetailAdmin from "./components/akun/admin/orders/OrderDetailAdmin";
import RiwayatOrder from "./pages/RiwayatOrder";

function App() {
  return (
    <Layout>
      <Switch>
        {/*PRODUCT PAGE */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product/:prodId">
          <Product />
        </Route>
        <Route path="/search">
          <Kategori />
        </Route>

        {/*LOGIN PAGE */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/daftar">
          <Daftar />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>

        {/*ORDER PRODUCT PAGE */}
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/pengiriman">
          <Pengiriman />
        </Route>
        <Route path="/pembayaran">
          <Pembayaran />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/riwayatorder" exact>
          <RiwayatOrder />
        </Route>
        <Route path="/riwayatorder/:orderId">
          <OrderDetail />
        </Route>

        {/*ADMIN PAGE */}
        <Route path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin/products">
          <Products />
        </Route>
        <Route path="/admin/add-product">
          <AddProduct />
        </Route>
        <Route path="/admin/edit-product/:Id">
          <EditProduct />
        </Route>
        <Route path="/admin/orders" exact>
          <Orders />
        </Route>
        <Route path="/admin/orders/:orderId">
          <OrderDetailAdmin />
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
