import { useHistory } from "react-router-dom";
import RiwayatOrderItem from "./RiwayatOrderItem";

const RiwayatOrderlist = (props) => {
  const history = useHistory();
  const handleGetId = (id) => {
    props.getIdOrder(id);
    history.push(`/riwayatorder/${id}`);
  };
  return (
    <table className="table-auto w-full text-left border-b-[1px] border-solid border-slate-300 p-3">
      <thead className="border-b-[1px] border-solid border-slate-300 my-3 ">
        <tr className="p-5">
          <th className="pr-2">ID</th>
          <th className="pr-2">TANGGAL</th>
          <th className="pr-2">TOTAL</th>
          <th className="pr-2">PEMBAYARAN</th>
          <th className="pr-2">PESANAN</th>
        </tr>
      </thead>
      <tbody>
        {props.orderList?.map((order) => (
          <RiwayatOrderItem
            key={order._id}
            id={order._id}
            getIdOrder={handleGetId.bind(null, order._id)}
            tanggal={order.detailOrderan.tanggalOrder}
            total={order.detailOrderan.totalBelanja}
            pembayaran={order.detailOrderan.pembayaran}
          />
        ))}
      </tbody>
    </table>
  );
};

export default RiwayatOrderlist;
