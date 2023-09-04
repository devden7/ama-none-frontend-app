import { Fragment } from "react";

const RiwayatOrderItem = (props) => {
  return (
    <Fragment>
      <tr className="border-b-[1px] border-solid border-slate-300 m-3">
        <td className="pr-2">{props.id}</td>
        <td className="pr-2">{props.tanggal}</td>
        <td className="pr-2">{props.total}</td>
        <td className="pr-2">{props.pembayaran}</td>
        <td className="pr-2">
          <button
            onClick={props.getIdOrder}
            className="p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150"
          >
            Details
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default RiwayatOrderItem;
