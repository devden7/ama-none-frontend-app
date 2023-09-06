import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductMedia from "./ProductMedia";
import Review from "./Review";
import Loading from "../../layout/loading/Loading";
import config from "../../../config";

const ProductMenu = () => {
  const [product, setProduct] = useState({
    id: "",
    nama: "",
    harga: "",
    imageUrl: "",
    stok: 0,
    deskripsi: "",
    review: [],
    rating: 0,
  });
  const [loading, setLoading] = useState(null);

  const { prodId } = useParams();
  const takeSingleProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${config.urlApi}product/single-product/${prodId}`
      );
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      setProduct({
        id: data.singleProduct._id,
        nama: data.singleProduct.nama,
        harga: data.singleProduct.harga,
        imageUrl: data.singleProduct.imageUrl,
        stok: data.singleProduct.stok,
        deskripsi: data.singleProduct.deskripsi,
        review: data.singleProduct.review,
        rating: data.singleProduct.rating,
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    takeSingleProduct();
  }, []);

  useEffect(() => {
    document.title = product.nama;
  }, [product]);

  return (
    <section className="p-3">
      <div className="container">
        {loading && (
          <div>
            <Loading />
          </div>
        )}
        {loading === false && (
          <div>
            <div className="flex flex-wrap gap-7">
              <ProductMedia product={product} />
            </div>

            <Review productReview={product.review} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductMenu;
