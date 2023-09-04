import FilterHarga from "./FilterHarga";
import FilterKategori from "./FilterKategori";
import FilterRating from "./FilterRating";

const FilterProduct = (props) => {
  return (
    <div>
      <h3 className="text-3xl text-slate-900 font-semibold mb-2">Jenis</h3>
      <FilterKategori
        kategori={props.kategori}
        products={props.products}
        setDefaultCurrentPage={props.setDefaultCurrentPage}
      />
      <h3 className="text-3xl text-slate-900 font-semibold mb-2">Harga</h3>
      <FilterHarga setDefaultCurrentPage={props.setDefaultCurrentPage} />
      <FilterRating setDefaultCurrentPage={props.setDefaultCurrentPage} />
    </div>
  );
};

export default FilterProduct;
