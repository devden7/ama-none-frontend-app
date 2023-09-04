import { useHistory } from "react-router-dom";

const OrdersList = (props) => {
  const history = useHistory();
  const btnHandler = () => {
    props.getSingleOrderHandler();
    history.push(`/admin/orders/${props.id}`);
  };
  return (
    <tbody>
      <tr className="border-b-[1px] border-solid border-slate-300 m-3">
        <td className="pr-2">{props.id}</td>
        <td className="pr-2">{props.nama}</td>
        <td className="pr-2">{props.tanggal}</td>
        <td className="pr-2">{props.totalBelanja}</td>
        <td className="pr-2">{props.pembayaran}</td>
        <td className="pr-2">
          <button
            onClick={btnHandler}
            className="p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150 mr-2"
          >
            Details
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrdersList;
