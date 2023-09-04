import PengirimanForm from "./PengirimanForm";

const PengirimanMenu = () => {
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
          <div className=" border-solid border-[#a0a0a0] border-b-[3px] w-full">
            Pembayaran
          </div>
          <div className="border-solid border-[#a0a0a0] border-b-[3px] w-full">
            Order
          </div>
        </div>
        <div className="p-3  w-2/4 mx-auto">
          <h1 className="font-semibold text-3xl mb-2 ">Pengiriman</h1>
          <PengirimanForm />
        </div>
      </div>
    </section>
  );
};

export default PengirimanMenu;
