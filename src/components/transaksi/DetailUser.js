import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const DetailUser = (props) => {
  return (
    <Fragment>
      <div className=" w-full">
        <div className="border-solid border-[1px] border-slate-300 p-4 rounded-lg">
          <h5 className="text-xl font-bold">Pengiriman</h5>
          <p>
            <span className="font-semibold">Nama : </span>
            {props.takeUserInfo.namaPenerima}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Alamat : </span>
            {props.takeUserInfo.alamatPenerima +
              " " +
              props.takeUserInfo.kotaPenerima +
              " " +
              props.takeUserInfo.kodePos}
          </p>
        </div>
      </div>

      <div className=" w-full">
        <div className="border-solid border-[1px] border-slate-300 p-4 rounded-lg">
          <h5 className="text-xl font-bold">Pembayaran</h5>
          <p className="mb-2">
            <span className="font-semibold">Melalui : </span>
            {props.takeTypePembayaran.viaPembayaran}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailUser;
