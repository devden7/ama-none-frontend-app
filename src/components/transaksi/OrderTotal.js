const OrderTotal = (props) => {
  const biayaPengiriman = 11000;
  const biayaAdmin = 1000;
  const calcBiaya = props.totalBelanja + biayaPengiriman + biayaAdmin;

  const angkaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(props.totalBelanja)
    .replace("IDR", " ")
    .trim();

  const calBiayaToRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,

    currencyDisplay: "code",
  })
    .format(calcBiaya)
    .replace("IDR", " ")
    .trim();

  const submitOrderHandler = (e) => {
    e.preventDefault();
    props.orderBtnHandler(calcBiaya);
  };
  return (
    <div className="w-full md:w-1/2">
      <div className="border-[1px] border-solid border-slate-300 rounded-md ">
        <div className="px-6">
          <p className="text-xl font-semibold text-slate-700 py-4">
            Ringkasan Pesanan
          </p>
          <div className="flex justify-between my-2">
            <p>Barang</p>
            <p>Rp {angkaToRupiah}</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Pengiriman</p>
            <p>Rp 11.000</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Biaya Admin</p>
            <p>Rp 1000</p>
          </div>
          <hr />
          <div className="flex justify-between my-2 font-bold">
            <p>Total Pesanan</p>
            <p>Rp {calBiayaToRupiah}</p>
          </div>
          <hr />
          <form onSubmit={submitOrderHandler}>
            <button className="bg-[#f0c040] text-slate-900 hover:bg-[#e9ba3a] transition my-3 py-2 px-3 rounded-md w-full">
              Selesai
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
