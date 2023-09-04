import { Fragment } from "react";
import KategoriItem from "./KategoriItem";

const KategoriList = (props) => {
  return (
    <Fragment>
      <ul onClick={props.clickBackdrop}>
        <h3 className="text-xl font-bold text-slate-900 ml-5">Kategori</h3>
        {props.listKategori.map((kategori) => (
          <KategoriItem key={kategori._id} id={kategori._id} />
        ))}
      </ul>
    </Fragment>
  );
};

export default KategoriList;
