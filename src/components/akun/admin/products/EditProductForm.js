const EditProductForm = (props) => {
  const submitEditHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitEditHandler}>
      <div className="flex flex-col mb-2">
        <label htmlFor="nama" className=" my-3">
          Nama Product
        </label>
        <input
          type="input"
          id="nama"
          className="border border-solid border-slate-300 py-1 rounded-md"
          defaultValue={props.productEdit.nama}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="harga" className=" my-3">
          Harga
        </label>
        <input
          type="number"
          onKeyDown={(e) => {
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
          }}
          id="harga"
          className="px-2 border border-solid border-slate-300 py-1 rounded-md "
          defaultValue={props.productEdit.harga}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="imageUrl" className=" my-3">
          Masukan Url Gambar
        </label>
        <input
          type="input"
          id="imageUrl"
          className="px-2 border border-solid border-slate-300 py-1 rounded-md "
          defaultValue={props.productEdit.imageUrl}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="kategori" className=" my-3">
          Kategori
        </label>
        <input
          type="input"
          id="kategori"
          className="border border-solid border-slate-300 py-1 rounded-md"
          defaultValue={props.productEdit.kategori}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="stok" className=" my-3">
          Stok
        </label>
        <input
          type="number"
          id="stok"
          className="px-2 border border-solid border-slate-300 py-1 rounded-md"
          defaultValue={props.productEdit.stok}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="deskripsi" className=" my-3">
          Deskripsi
        </label>
        <input
          type="input"
          id="deskripsi"
          className="border border-solid border-slate-300 py-1 rounded-md"
          defaultValue={props.productEdit.deskripsi}
        />
      </div>
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md">
        Tambah
      </button>
    </form>
  );
};

export default EditProductForm;
