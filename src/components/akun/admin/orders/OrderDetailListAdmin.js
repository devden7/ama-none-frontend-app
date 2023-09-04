import { Fragment } from "react";

const OrderDetailListAdmin = (props) => {
  return (
    <Fragment>
      <li className="flex flex-wrap justify-between items-center w-full  border-solid border-b-[1px] border-slate-300 ">
        <div className="w-24 border-[1px] border-solid border-slate-300 p-2 mb-3">
          <img src={props.imageUrl} alt="buku" />
        </div>
        <p>{props.nama}</p>
        <p>{props.harga}</p>
        <div className="flex items-center gap-4">
          <p>{props.quantityItem}</p>
        </div>
      </li>
    </Fragment>
  );
};

export default OrderDetailListAdmin;
