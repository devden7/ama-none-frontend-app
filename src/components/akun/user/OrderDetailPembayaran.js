const OrderDetailPembayaran = (props) => {
  const jumlahItems = props.detailHarga?.reduce((quantity, item) => {
    const itemQuantity = item.harga === undefined ? 0 : item.harga;
    return quantity + itemQuantity;
  }, 0);

  return (
    <div className="border-[1px] border-solid border-slate-300 rounded-md ">
      <div className="px-6">
        <p className="text-xl font-semibold text-slate-700 py-4">
          Ringkasan Pesanan
        </p>
        <div className="flex justify-between my-2 md:text-sm lg:text-base">
          <p>Barang</p>
          <p>{jumlahItems}</p>
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
          <p>Total Pesanan</p>
          <p>{props.detailTotalBelanja}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPembayaran;
