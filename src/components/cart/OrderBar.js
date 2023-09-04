import { NavLink } from "react-router-dom";

const OrderBar = (props) => {
  const jumlahItems = props.items.reduce((quantity, item) => {
    const itemQuantity =
      item.quantityItem === undefined ? 1 : item.quantityItem;
    return quantity + itemQuantity;
  }, 0);
  return (
    <div className="w-full md:w-1/2">
      <div className="border-[1px] border-solid border-slate-300 rounded-md ">
        <div className="px-6">
          <p className="text-2xl font-semibold text-slate-700 py-4">
            Subtotal ({props.isAuth ? jumlahItems : 0} items) :
            {props.isAuth ? props.totalBelanja : 0}
          </p>
          <hr />
          {props.items.length === 0 ? (
            <button
              className="bg-[#80b1fa] text-white transition my-3 py-2 px-3 rounded-md w-full cursor-default"
              disable="true"
            >
              Bayar
            </button>
          ) : (
            <NavLink to={"/pengiriman"}>
              <button className="bg-[#448fff] text-white hover:bg-[#337ae6] transition my-3 py-2 px-3 rounded-md w-full">
                Bayar
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBar;
