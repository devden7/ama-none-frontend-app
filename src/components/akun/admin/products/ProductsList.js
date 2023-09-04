import { NavLink } from "react-router-dom";

const ProductsList = (props) => {
  const prodId = props.id;

  const deleteBtnHandler = async (prodId) => {
    if (window.confirm("Hapus Product?")) {
      try {
        const response = await fetch(
          `https://amanone-backend-app.vercel.app/admin/delete-product/${prodId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${props.token}`,
            },
          }
        );
        if (response.status !== 201) {
          return;
        }
        const data = await response.json();
        props.setAllProducts((prev) => {
          const newProduct = prev.filter((product) => product._id !== prodId);
          return newProduct;
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <tbody>
      <tr className="border-b-[1px] border-solid border-slate-300 m-3">
        <td className="pr-2">{props.id}</td>
        <td className="pr-2">{props.nama}</td>
        <td className="pr-2">{props.harga}</td>
        <td className="pr-2">{props.kategori}</td>
        <td className="pr-2">
          <NavLink
            to={`/admin/edit-product/${prodId}`}
            className="p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150 mr-2"
          >
            Edit
          </NavLink>
          <button
            onClick={deleteBtnHandler.bind(null, prodId)}
            className="p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductsList;
