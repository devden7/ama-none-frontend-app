import { Link } from "react-router-dom";

const KategoriItem = (props) => {
  return (
    <li className="ml-5 mt-5 flex flex-col gap-3">
      <Link to={`/search?kategori=${props.id}`} className="text-base ">
        {props.id}
      </Link>
    </li>
  );
};

export default KategoriItem;
