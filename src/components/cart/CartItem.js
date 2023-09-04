import { Fragment } from "react";

const CartItem = (props) => {
  return (
    <Fragment>
      <li className="border-[1px] border-solid border-slate-300 p-4 rounded-lg mb-3">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-24 border-[1px] border-solid border-slate-300 p-2">
            <img src={props.imageUrl} alt={props.nama} />
          </div>
          <p>{props.nama}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={props.kurangQuantity}
              className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
            >
              <ion-icon name="remove-outline"></ion-icon>
            </button>
            <p>{props.quantityItem === undefined ? 1 : props.quantityItem}</p>
            <button
              onClick={props.tambahQuantity}
              className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
            >
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
          <div>{props.harga}</div>
          <button
            onClick={props.hapusItemCart}
            className="bg-slate-100 hover:bg-slate-200 h-8 w-8"
          >
            <ion-icon name="trash-sharp"></ion-icon>
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
