import { Fragment } from "react";

const OrderUserList = (props) => {
  return (
    <Fragment>
      <li className="flex flex-wrap justify-between items-center w-full  border-solid border-b-[1px] border-slate-300 ">
        <div className="w-24 border-[1px] border-solid border-slate-300 p-2 mb-3">
          <img src={props.imageUrl} alt={props.nama} />
        </div>
        <p>{props.nama}</p>
        <p>{props.harga}</p>
        <div className="flex items-center gap-4">
          <button
            className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
            onClick={props.kurangQuantity}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <p>{props.quantityItem}</p>
          <button
            className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
            onClick={props.tambahQuantity}
          >
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <button
          className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
          onClick={props.hapusItemCart}
        >
          <ion-icon name="trash-sharp"></ion-icon>
        </button>
      </li>
    </Fragment>
  );
};

export default OrderUserList;
