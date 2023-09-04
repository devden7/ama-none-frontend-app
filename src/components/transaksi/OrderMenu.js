import { useContext, useEffect, useState } from "react";

import DetailUser from "./DetailUser";
import OrderTotal from "./OrderTotal";
import OrderUser from "./OrderUser";
import CartContext from "../../store/cart-context";
import orderContext from "../../store/order-context";

const OrderMenu = () => {
  const [takeUserInfo, setTakeUserInfo] = useState("");
  const [takeTypePembayaran, setTakeTypePembayaran] = useState("");

  const cartCtx = useContext(CartContext);
  const orderCtx = useContext(orderContext);

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("infoUser"));

    if (dataUser) {
      setTakeUserInfo(dataUser);
    }

    const dataPembayaran = JSON.parse(localStorage.getItem("methodPembayaran"));

    if (dataPembayaran) {
      setTakeTypePembayaran(dataPembayaran);
    }
  }, []);

  const tambahQuantity = (item) => {
    cartCtx.tambahItem(item);
  };

  const kurangQuantity = (id) => {
    cartCtx.kurangItem(id);
  };

  const hapusItemCart = (id) => {
    cartCtx.hapusItem(id);
  };

  const orderBtnHandler = async (totalOrder) => {
    const kalender = new Date();
    const tanggal = kalender.getDate();
    const bulan = kalender.getMonth() + 1;
    const tahun = kalender.getFullYear(); // TANGGAL,BULAN,TAHUN
    const satukanKalender = tanggal + "-" + bulan + "-" + tahun;

    const dataPenerima = {
      tanggal: satukanKalender,
      takeUserInfo,
      takeTypePembayaran,
      totalBelanja: totalOrder,
      status: "pending",
    };
    orderCtx.addOrder(dataPenerima);
  };
  return (
    <section className="p-3">
      <div className="container">
        <div className="flex justify-between text-slate-400">
          <div className="border-solid border-[#f08000] border-b-[3px] w-full ">
            SignIn
          </div>
          <div className=" border-solid  border-[#f08000] border-b-[3px] w-full">
            Pengiriman
          </div>
          <div className=" border-solid border-[#f08000] border-b-[3px] w-full">
            Pembayaran
          </div>
          <div className="border-solid border-[#f08000] border-b-[3px] w-full">
            Order
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-3xl my-2">Tinjau Pesanan</h1>
          <div className="flex flex-wrap justify-between md:flex-nowrap gap-4">
            <div className="flex flex-wrap flex-col w-full gap-3">
              <DetailUser
                takeUserInfo={takeUserInfo}
                takeTypePembayaran={takeTypePembayaran}
              />
              <OrderUser
                items={cartCtx.items}
                tambahQuantity={tambahQuantity}
                kurangQuantity={kurangQuantity}
                hapusItemCart={hapusItemCart}
              />
            </div>
            <OrderTotal
              totalBelanja={cartCtx.totalBelanja}
              orderBtnHandler={orderBtnHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderMenu;
