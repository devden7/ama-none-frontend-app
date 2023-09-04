const DashBoardPenghasilan = (props) => {
  const jumlahPenjualan = props.order?.reduce((quantity, item) => {
    if (item.detailOrderan.statusOrder === "Berhasil Dikirim") {
      quantity = quantity + item.detailOrderan.totalBelanja;
    }
    return quantity;
  }, 0);
  let count = 0;
  for (let i = 0; i < props.order?.length; i++) {
    if (props.order[i].detailOrderan.statusOrder === "Berhasil Dikirim") {
      count++;
    }
  }

  const userListLength = props.userList?.length || 0;
  return (
    <div className="flex flex-wrap  justify-between mb-5">
      <div className="border-solid border-[1px] border-slate-300 w-full p-3 rounded-lg md:w-1/4">
        <h5 className="text-xl font-semibold mb-2">
          {userListLength > 0 ? userListLength - 1 : 0}
        </h5>
        <p>Users</p>
      </div>
      <div className="border-solid border-[1px] border-slate-300 w-full p-3 rounded-lg md:w-1/4">
        <h5 className="text-xl font-semibold mb-2">{count}</h5>
        <p>Orders</p>
      </div>
      <div className="border-solid border-[1px] border-slate-300 w-full p-3 rounded-lg md:w-1/4">
        <h5 className="text-xl font-semibold mb-2">{jumlahPenjualan}</h5>
        <p>Penjualan</p>
      </div>
    </div>
  );
};

export default DashBoardPenghasilan;
