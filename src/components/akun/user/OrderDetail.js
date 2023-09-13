import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import OrderDetailItem from "./OrderDetailItem";
import OrderDetailPembayaran from "./OrderDetailPembayaran";
import orderContext from "../../../store/order-context";
import Loading from "../../layout/loading/Loading";
import AuthContext from "../../../store/auth-context";
import config from "../../../config";

const OrderDetail = () => {
  const orderCtx = useContext(orderContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { orderId } = useParams();

  if (!authCtx.isAuth) {
    history.push("/login");
  }

  useEffect(() => {
    if (authCtx.isAuth) {
      orderCtx.getSingleOrder();
      orderCtx.getIdOrder(orderId);
      orderCtx.token();
    }
  }, [authCtx.isAuth, orderCtx.orderId, orderCtx.tokenUser]);

  const submitButtonReview = async (id, productReview) => {
    const { orderId, rating, review } = productReview;
    const kalender = new Date();
    const tanggal = kalender.getDate();
    const bulan = kalender.getMonth() + 1;
    const tahun = kalender.getFullYear();
    const satukanKalender = tanggal + "-" + bulan + "-" + tahun;

    try {
      const response = await fetch(`${config.urlApi}kirim-review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: orderId,
          userName: authCtx.userName,
          rating: rating,
          review: review,
          tanggal: satukanKalender,
        }),
      });
      if (response.status !== 201) {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const styleColorBtnPengiriman =
    orderCtx.singleItem?.detailOrderan.statusOrder === "pending"
      ? "bg-yellow-400"
      : orderCtx.singleItem?.detailOrderan.statusOrder === "Berhasil Dikirim"
      ? "bg-green-400"
      : "bg-red-400";
  return (
    <section className="p-3">
      <div className="container">
        {orderCtx.loading && <Loading />}
        {orderCtx.loading === false && (
          <div>
            <h1 className="font-semibold text-3xl my-2">
              Order {orderCtx.singleItem?._id}
            </h1>

            <div className="flex flex-wrap gap-4 w-full justify-between md:flex-nowrap md:w-3/3 ">
              <div className=" w-full lg:w-3/5">
                <div className="border-solid border-[1px] border-slate-300 p-4 rounded-lg mb-3">
                  <h5 className="text-xl font-bold">Pengiriman</h5>
                  <p>
                    <span className="font-semibold">Nama : </span>
                    {
                      orderCtx.singleItem?.detailOrderan.userInfoPenerima
                        .namaPenerima
                    }
                  </p>
                  <p>
                    <span className="font-semibold">Alamat : </span>
                    {
                      orderCtx.singleItem?.detailOrderan.userInfoPenerima
                        .alamatPenerima
                    }
                  </p>
                  <p>
                    <span className="font-semibold">pembayaran : </span>
                    {orderCtx.singleItem?.detailOrderan.pembayaran}
                  </p>

                  <div className="flex gap-3">
                    <p className="font-semibold">status : </p>
                    <p
                      className={`mb-2 text-sm ${styleColorBtnPengiriman} text-slate-700 font-bold p-1 rounded-md inline-block`}
                    >
                      {orderCtx.singleItem?.detailOrderan.statusOrder}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 border-[1px] border-solid border-slate-300 p-4 rounded-lg">
                  {orderCtx.singleItem?.detailOrderan.items.map((item) => (
                    <OrderDetailItem
                      key={item.id}
                      orderId={orderId}
                      id={item.id}
                      nama={item.nama}
                      imageUrl={item.imageUrl}
                      harga={item.harga}
                      quantityItem={item.quantityItem}
                      statusOrder={
                        orderCtx.singleItem?.detailOrderan.statusOrder
                      }
                      userName={orderCtx.singleItem.accountInfo.namaAkun}
                      review={item.review}
                      isReview={item.isReview}
                      submitButtonReview={submitButtonReview}
                    />
                  ))}
                </ul>
              </div>

              <div className=" w-full lg:w-2/5">
                <OrderDetailPembayaran
                  detailTotalBelanja={
                    orderCtx.singleItem?.detailOrderan.totalBelanja
                  }
                  detailHarga={orderCtx.singleItem?.detailOrderan.items}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderDetail;
