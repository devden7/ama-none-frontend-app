import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import OrderDetailListAdmin from "./OrderDetailListAdmin";
import AuthContext from "../../../../store/auth-context";
import AdminOrderContext from "../../../../store/admin-order-context";
import Loading from "../../../layout/loading/Loading";

const OrderDetailAdmin = () => {
  const [status, setStatus] = useState("");
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  if (!authCtx.isAuth) {
    history.push("/login");
  }
  useEffect(() => {
    if (authCtx.isAuth) {
      adminOrderCtx.getAdminSingleOrder();
    }
  }, [authCtx.isAuth]);
  const adminOrderCtx = useContext(AdminOrderContext);
  const harga = adminOrderCtx.adminListSingleOrder?.detailOrderan.items.reduce(
    (quantity, item) => {
      const itemQuantity = item.harga === undefined ? 1 : item.harga;
      return quantity + itemQuantity;
    },
    0
  );

  const statusBtnHandler = async (e) => {
    e.preventDefault();
    adminOrderCtx.updateStatusPengiriman(
      adminOrderCtx.adminListSingleOrder._id,
      { statusPengiriman: status }
    );
  };

  const dikirimStatusHandler = () => {
    setStatus("Berhasil Dikirim");
  };

  const batalkanStatusHandler = () => {
    setStatus("Gagal");
  };

  const styleColorBtnPengiriman =
    adminOrderCtx.adminListSingleOrder?.detailOrderan.statusOrder === "pending"
      ? "bg-yellow-400"
      : adminOrderCtx.adminListSingleOrder?.detailOrderan.statusOrder ===
        "Berhasil Dikirim"
      ? "bg-green-400"
      : "bg-red-400";

  return (
    <section className="p-3">
      <div className="container">
        {adminOrderCtx.loading && <Loading />}
        {adminOrderCtx.loading === false && (
          <div>
            <h1 className="font-semibold text-3xl my-2">
              Order {adminOrderCtx.adminListSingleOrder?._id}
            </h1>
            <div className="flex flex-wrap gap-4 w-full justify-between md:flex-nowrap md:w-3/3 ">
              <div className=" w-full lg:w-3/5">
                <div className="border-solid border-[1px] border-slate-300 p-4 rounded-lg mb-3">
                  <h5 className="text-xl font-bold">Pengiriman</h5>
                  <p>
                    <span className="font-semibold">Nama : </span>
                    {
                      adminOrderCtx.adminListSingleOrder?.detailOrderan
                        .userInfoPenerima.namaPenerima
                    }
                  </p>
                  <p>
                    <span className="font-semibold">Alamat : </span>
                    {
                      adminOrderCtx.adminListSingleOrder?.detailOrderan
                        .userInfoPenerima.alamatPenerima
                    }
                  </p>
                  <p>
                    <span className="font-semibold">pembayaran : </span>
                    {
                      adminOrderCtx.adminListSingleOrder?.detailOrderan
                        .pembayaran
                    }
                  </p>
                  <div className="flex gap-3">
                    <p className="font-semibold">status : </p>
                    <p
                      className={`mb-2 text-sm ${styleColorBtnPengiriman} text-slate-700 font-bold p-1 rounded-md inline-block`}
                    >
                      {
                        adminOrderCtx.adminListSingleOrder?.detailOrderan
                          .statusOrder
                      }
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 border-[1px] border-solid border-slate-300 p-4 rounded-lg">
                  {adminOrderCtx.adminListSingleOrder?.detailOrderan.items.map(
                    (item) => (
                      <OrderDetailListAdmin
                        key={item.id}
                        nama={item.nama}
                        imageUrl={item.imageUrl}
                        harga={item.harga}
                        quantityItem={item.quantityItem}
                      />
                    )
                  )}
                </ul>
              </div>

              <div className=" w-full lg:w-2/5">
                <div className="border-[1px] border-solid border-slate-300 rounded-md ">
                  <div className="px-6">
                    <p className="text-xl font-semibold text-slate-700 py-4">
                      Ringkasan Pesanan
                    </p>
                    <div className="flex justify-between my-2 md:text-sm lg:text-base">
                      <p>Barang</p>
                      <p>{harga}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-2 md:text-sm lg:text-base">
                      <p>Pengiriman</p>
                      <p>11000</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-2 md:text-sm lg:text-base">
                      <p>Biaya Admin</p>
                      <p>1000</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-2 font-bold md:text-sm lg:text-base">
                      <p></p>
                    </div>
                    <div className="flex justify-between my-2 font-bold">
                      <p>Total Pesanan</p>
                      <p>
                        {
                          adminOrderCtx.adminListSingleOrder?.detailOrderan
                            .totalBelanja
                        }
                      </p>
                    </div>
                  </div>
                </div>
                {adminOrderCtx.adminListSingleOrder?.detailOrderan
                  .statusOrder === "pending" && (
                  <div className="flex justify-end gap-2">
                    <form onSubmit={statusBtnHandler}>
                      <button
                        type="submit"
                        className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md"
                        onClick={dikirimStatusHandler}
                      >
                        Kirim Barang
                      </button>
                      <button
                        className="my-2 p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150 mr-2"
                        onClick={batalkanStatusHandler}
                      >
                        Batalkan
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderDetailAdmin;
