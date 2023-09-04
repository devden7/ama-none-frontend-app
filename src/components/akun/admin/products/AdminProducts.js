import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Loading from "../../../layout/loading/Loading";
import ProductsList from "./ProductsList";

const AdminProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  const handleAllProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/admin/products", {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();
      setLoading(false);
      setAllProducts(data.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAllProduct();
  }, []);
  return (
    <section className="p-3">
      <div className="container">
        {loading && <Loading />}

        {loading === false && (
          <div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-3xl my-2">Products</h1>
              <NavLink
                to="/admin/add-product"
                className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md"
              >
                Tambahkan Product
              </NavLink>
            </div>
            {loading === false && allProducts.length === 0 && (
              <p>Tidak ada Products!</p>
            )}
            <table className="table-auto w-full text-left border-b-[1px] border-solid border-slate-300 p-3">
              {allProducts.length !== 0 && (
                <thead className="border-b-[1px] border-solid border-slate-300 my-3 ">
                  <tr className="p-5">
                    <th className="pr-2">ID</th>
                    <th className="pr-2">NAMA</th>
                    <th className="pr-2">HARGA</th>
                    <th className="pr-2">KATEGORI</th>
                    <th className="pr-2">SESUAIKAN</th>
                  </tr>
                </thead>
              )}
              {allProducts.map((product) => (
                <ProductsList
                  key={product._id}
                  id={product._id}
                  nama={product.nama}
                  harga={product.harga}
                  kategori={product.kategori}
                  setAllProducts={setAllProducts}
                  token={props.token}
                  isAuth={props.isAuth}
                />
              ))}
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminProducts;
