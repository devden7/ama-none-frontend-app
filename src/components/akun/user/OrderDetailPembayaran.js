const OrderDetailPembayaran = (props) => {
  const jumlahItems = props.detailHarga?.reduce((quantity, item) => {
    const itemQuantity = item.harga === undefined ? 0 : item.harga;
    return quantity + itemQuantity;
  }, 0);

  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(jumlahItems)
    .replace("IDR", " ")
    .trim();

  const calBiayaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(props.detailTotalBelanja)
    .replace("IDR", " ")
    .trim();

  return (
    <div className="border-[1px] border-solid border-slate-300 rounded-md ">
      <div className="px-6">
        <p className="text-xl font-semibold text-slate-700 py-4">
          Ringkasan Pesanan
        </p>
        <div className="flex justify-between my-2 md:text-sm lg:text-base">
          <p>Barang</p>
          <p>Rp {angkaToRupiah}</p>
        </div>
        <hr />
        <div className="flex justify-between my-2 md:text-sm lg:text-base">
          <p>Pengiriman</p>
          <p>Rp 11.000</p>
        </div>
        <hr />
        <div className="flex justify-between my-2 md:text-sm lg:text-base">
          <p>Biaya Admin</p>
          <p>Rp 1000</p>
        </div>
        <hr />
        <div className="flex justify-between my-2 font-bold md:text-sm lg:text-base">
          <p>Total Pesanan</p>
          <p>Rp {calBiayaToRupiah}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPembayaran;
