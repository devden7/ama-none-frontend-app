import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PembayaranMenu = () => {
  const [pembayaran, setPembayaran] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const history = useHistory();
  const pembayaranBtnHandler = (e) => {
    setPembayaran(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem(
      "methodPembayaran",
      JSON.stringify({ viaPembayaran: pembayaran })
    );
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (pembayaran === null) {
      setIsValid(false);
      return;
    }
    history.push("/order");
  };
  return (
    <section className="p-3">
      <div className="container">
        <div className="flex justify-between text-slate-400">
          <div className="border-solid border-[#f08000] border-b-[3px] w-full ">
            SignIn
          </div>
          <div className=" border-solid  border-[#f08000] border-b-[3px] w-full">
            Pengiriman
          </div>
          <div className=" border-solid border-[#f08000] border-b-[3px] w-full">
            Pembayaran
          </div>
          <div className="border-solid border-[#a0a0a0] border-b-[3px] w-full">
            Order
          </div>
        </div>
        <div className="p-3  w-2/4 mx-auto">
          <h1 className="font-semibold text-3xl mb-2">Pembayaran</h1>
          <form onSubmit={submitHandler}>
            <div className="flex gap-2">
              <input
                type="radio"
                id="dana"
                value="Dana"
                onChange={pembayaranBtnHandler}
                checked={pembayaran === "Dana"}
              />
              <label htmlFor="dana">Dana</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="gopay"
                value="Gopay"
                onChange={pembayaranBtnHandler}
                checked={pembayaran === "Gopay"}
              />
              <label htmlFor="gopay">Gopay</label>
            </div>
            <div>
              {isValid === false && (
                <p className="text-red-500 text-sm">Isi salah satu</p>
              )}
            </div>
            <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
              Lanjutkan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default PembayaranMenu;
